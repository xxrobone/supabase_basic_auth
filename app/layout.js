'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

/* export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}; */

export default function RootLayout({ children }) {
  const [supabase] = useState(() =>
    createClientComponentClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
  );

  const signUp = () => {
    supabase.auth.signUp({
      email: 'robert.wagar@edu.cmeducations.se',
      password: 'hiphop5678!',
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: 'robert.wagar@edu.cmeducations.se',
      password: 'hiphop5678!',
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>

        {children}
      </body>
    </html>
  );
}
