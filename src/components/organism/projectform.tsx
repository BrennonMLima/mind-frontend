import React, { useEffect, useState } from 'react';
import Input from '../atoms/input/input';
import { InputContainer } from '../login/sign.styles';
import Button from '../atoms/button/button';
import { ModalForm } from './organism.styles';

interface NewProjectFormProps {
    onSubmit: (name: string, description: string) => Promise<void>;
    initialValues?: {
        name: string;
        description: string;
    };
}

const ProjectForm: React.FC<NewProjectFormProps> = ({ onSubmit, initialValues }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (initialValues) {
            setName(initialValues.name);
            setDescription(initialValues.description);
        }
    }, [initialValues]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, description);
        setName('');
        setDescription('');
    };

    return (
        <ModalForm onSubmit={handleSubmit}>
            <InputContainer>
                <label>Nome do Projeto</label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <label>Descrição</label>
                <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </InputContainer>
            <Button type="submit">Criar Projeto</Button>
        </ModalForm>
    );
};

export default ProjectForm;
