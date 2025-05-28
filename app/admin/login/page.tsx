"use client"

import React, { useState } from 'react';
import { login } from '../../api/api';
import BackgroundAnimation from '@/app/components/BackgroundAnimation';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const route = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login({ username, password });
      alert('Login successful!');
      // navigate('/dashboard') if you're using react-router
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <BackgroundAnimation />
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-2xl rounded-2xl shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium">Username</label>
                    <input
                    id="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition cursor-pointer"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                </form>
            </div>
            <button onClick={() => route.back()} className='bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition cursor-pointer'>
                Go Back
            </button>
        </div>
    </>
  );
};

export default LoginPage;
