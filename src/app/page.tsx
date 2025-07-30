'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * The root page component. Its sole purpose is to redirect users
 * to the authentication page immediately.
 */
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/auth');
  }, [router]);

  // Render nothing, or a loading spinner, while redirecting.
  return null;
}
