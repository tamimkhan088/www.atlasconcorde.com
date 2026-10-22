'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Mail, Lock, User, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase-client';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: name } },
        });
        if (signUpError) throw signUpError;
        setSuccess('Account created! Signing you in...');
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        router.push('/');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        router.push('/');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      if (message.includes('Invalid login')) setError('Incorrect email or password.');
      else if (message.includes('already registered') || message.includes('already been registered'))
        setError('An account with this email already exists. Try signing in instead.');
      else if (message.includes('password') && message.includes('at least'))
        setError('Password must be at least 6 characters.');
      else if (message.includes('Failed to send') || message.includes('rate limit'))
        setError('Too many attempts. Please wait a moment and try again.');
      else setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Link href="/" className="login-brand">
          <span className="brand-mark">
            <span />
          </span>
          <span className="brand-text">atlas concorde</span>
        </Link>

        <div className="login-tabs">
          <button
            type="button"
            className={mode === 'signin' ? 'active' : ''}
            onClick={() => { setMode('signin'); setError(''); setSuccess(''); }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={mode === 'signup' ? 'active' : ''}
            onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
          >
            Create Account
          </button>
        </div>

        <h1 className="login-title">
          {mode === 'signin' ? 'Welcome back' : 'Join Atlas Concorde'}
        </h1>
        <p className="login-subtitle">
          {mode === 'signin'
            ? 'Sign in to access your saved collections and projects.'
            : 'Create an account to save collections and track your projects.'}
        </p>

        {error && (
          <div className="login-alert">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="login-alert success">
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          {mode === 'signup' && (
            <label className="login-field">
              <span className="field-label">Full Name</span>
              <div className="field-input-wrap">
                <User size={18} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
            </label>
          )}

          <label className="login-field">
            <span className="field-label">Email</span>
            <div className="field-input-wrap">
              <Mail size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
          </label>

          <label className="login-field">
            <span className="field-label">Password</span>
            <div className="field-input-wrap">
              <Lock size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === 'signup' ? 'At least 6 characters' : 'Your password'}
                required
                minLength={6}
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              />
            </div>
          </label>

          <button type="submit" className="pill-button login-submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={16} className="spin" />
                <span>Please wait...</span>
              </>
            ) : (
              <>
                <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <p className="login-switch">
          {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin');
              setError('');
              setSuccess('');
            }}
          >
            {mode === 'signin' ? 'Create one' : 'Sign in'}
          </button>
        </p>

        <Link href="/" className="login-back">
          <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
}
