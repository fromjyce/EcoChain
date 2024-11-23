import { useAuth } from '@/context/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withAuth(Component) {
  return function ProtectedPage(props) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/signin');
      }
    }, [user, router]);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
