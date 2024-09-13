import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import AppRouter from './router/router';
import { login } from './service/users';
import { getCookie, setCookie } from 'typescript-cookie';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const token = getCookie("auth-token");
    if (token) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data: { token }, status } = await login(email, password);
      if (status === 200) {
        setCookie("auth-token", token)
        setIsLoggedIn(true)
      }
    } catch {
      alert('Dados incorretos! Tente Novamente.')
    }
  }


  return (
    <div className="App">
      <AppRouter
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
      />
      <GlobalStyles />
    </div>
  );
};

export default App;
