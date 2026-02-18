'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { supabase } from '@/lib/supabase/client';
import { initializeProgress, updateLastLogin } from '@/lib/supabase/db';
import type { User } from '@supabase/supabase-js';

export interface AppUser {
  id: string;
  email: string;
  displayName: string;
  photoURL: string | null;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

function toAppUser(u: User): AppUser {
  return {
    id: u.id,
    email: u.email ?? '',
    displayName: u.user_metadata?.full_name ?? u.email ?? 'User',
    photoURL: u.user_metadata?.avatar_url ?? null,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const appUser = toAppUser(session.user);
        setUser(appUser);
        initializeProgress(appUser.id);
        updateLastLogin(appUser.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          const appUser = toAppUser(session.user);
          setUser(appUser);
          initializeProgress(appUser.id);
          updateLastLogin(appUser.id);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
