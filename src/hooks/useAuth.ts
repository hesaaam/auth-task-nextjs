
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types';

/**
 * A custom hook to manage the entire authentication state and logic.
 * It handles login, logout, and retrieving user data from localStorage.
 */
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // This effect runs once on component mount to check for a logged-in user.
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('user'); // Clean up corrupted data
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (): Promise<User> => {
    // In a real app, this would be a POST request with username/password.
    // Here, we simulate it by fetching our mock data.
    const response = await fetch('/api.json');
    if (!response.ok) {
      throw new Error('Failed to fetch user data.');
    }
    const data = await response.json();
    const fetchedUser: User = data.results[0];

    localStorage.setItem('user', JSON.stringify(fetchedUser));
    setUser(fetchedUser);
    return fetchedUser;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/auth');
  };

  return { user, login, logout, loading };
};
