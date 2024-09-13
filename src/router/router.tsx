import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../components/login/sign-in';
import SignUp from '../components/login/sign-up';


interface RouterProps {
    isLoggedIn: boolean;
    handleLogin: (name: string, password: string) => void;
}

const AppRouter: React.FC<RouterProps> = ({
    isLoggedIn,
    handleLogin,
}) => {
    return (
        <Router>
            {isLoggedIn ? (
                <div>logado</div>
            ) : (
                <Routes>
                    <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<SignIn onLogin={handleLogin} />} />
                </Routes>
            )}
        </Router>
    );
};

export default AppRouter;
