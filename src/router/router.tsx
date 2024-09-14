import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../components/login/sign-in';
import SignUp from '../components/login/sign-up';
import MainPage from '../components/template/mainpage';
import ProjectDetailPage from '../components/template/projectdetail';
import Header from '../components/molecules/header';

interface RouterProps {
    isLoggedIn: boolean;
    handleLogin: (name: string, password: string) => void;
}

const AppRouter: React.FC<RouterProps> = ({ isLoggedIn, handleLogin }) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
