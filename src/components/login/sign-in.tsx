import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { SignContainer, FormStyles, PlaceHolder, InputContainer } from './sign.styles';
import Button from '../../components/atoms/button/button';
import Input from '../../components/atoms/input/input';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const SignIn: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
        navigate("/")
    };

    return (
        <SignContainer>
            <h1>Login</h1>
            <p>Olá, bem-vindo(a) de</p>
            <p>volta!</p>
            <FormStyles onSubmit={handleSubmit}>
                <InputContainer>
                    <Input 
                        type="text" 
                        placeholder=" " 
                        onChange={handleEmailChange} 
                        className={`text-input ${email ? 'filled' : ''}`}/>
                    <PlaceHolder>Email</PlaceHolder>
                </InputContainer>
                <InputContainer>
                    <Input 
                        type="password" 
                        placeholder=" " 
                        onChange={handlePasswordChange}
                        className={`text-input ${password ? 'filled' : ''}`}/>
                    <PlaceHolder>Senha</PlaceHolder>
                </InputContainer>
                <Button type="submit" className='margin-top'>Entrar</Button>
                <p>Não tem uma conta? <Link to="/signup" className='link'>Cadastre-se!</Link></p>
            </FormStyles>
        </SignContainer>
    );
};

export default SignIn;
