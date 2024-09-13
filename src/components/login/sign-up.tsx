import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/atoms/input/input';
import Button from '../../components/atoms/button/button';
import { SignContainer, FormStyles, PlaceHolder, InputContainer, ImageContainer } from './sign.styles';
import { createUser } from '../../service/users';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setImage(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !image) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        try {
            const { data, status } = await createUser(name, email, password, image);
            if (status === 201) {
                navigate('/login');
            }
        } catch (err) {
            alert('Ocorreu um erro! tente novamente. ' + err);
        }
    };

    return (
        <SignContainer>
            <h1>Cadastre-se</h1>
            <p>Olá, bem-vindo(a)!</p>
            <FormStyles onSubmit={handleSubmit}>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder=" "
                        onChange={handleNameChange}
                        className={`text-input ${name ? 'filled' : ''}`}
                    />
                    <PlaceHolder>Nome</PlaceHolder>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder=" "
                        onChange={handleEmailChange}
                        className={`text-input ${email ? 'filled' : ''}`} />
                    <PlaceHolder>Email</PlaceHolder>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="password"
                        placeholder=" "
                        onChange={handlePasswordChange}
                        className={`text-input ${password ? 'filled' : ''}`} />
                    <PlaceHolder>Senha</PlaceHolder>
                </InputContainer>
                <ImageContainer>
                    <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        className="image-input"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="imageInput" className="image-label">
                        Selecione a foto de perfil
                    </label>
                    {imagePreview && <img src={imagePreview} alt="Pré-visualização" className="image-preview" />}
                    {!imagePreview && <p className="placeholder-text">Nenhuma imagem selecionada</p>}
                </ImageContainer>
                <Button type="submit" className='margin-top'>Cadastrar</Button>
                <p>Já tem uma conta? <Link to="/login" className='link'>Entre!</Link></p>
            </FormStyles>
        </SignContainer>
    );
};

export default SignUp;
