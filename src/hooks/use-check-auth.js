import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useCheckAuth(stateToken) {
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token');

    if (!localStorageToken || localStorageToken !== stateToken) {
      navigate('/login');
    }
  }, []);
}

export default useCheckAuth;
