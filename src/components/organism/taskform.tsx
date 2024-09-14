import React, { useState, useEffect } from 'react';
import Input from '../atoms/input/input';
import { InputContainer } from '../login/sign.styles';
import Button from '../atoms/button/button';
import { ModalForm } from './organism.styles';
import { getAllUsers } from '../../service/users';
import { SelectStyles } from '../atoms/select/select.styles';

interface NewTaskFormProps {
    onSubmit: (name: string, description: string, dueDate: string, status: string, userId: string) => void;
    initialValues?: {
        name: string;
        description: string;
        dueDate: string;
        status: string;
        userId: string;
    };
}

interface User {
    id: string;
    name: string;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({ onSubmit, initialValues }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        if (initialValues) {
            setName(initialValues.name);
            setDescription(initialValues.description);
            setDueDate(initialValues.dueDate);
            setStatus(initialValues.status);
            setSelectedUser(initialValues.userId);
        }

        const fetchUsers = async () => {
            try {
                const usersResponse = await getAllUsers();
                setUsers(usersResponse.data.users);
            } catch (error) {
                console.error('Erro ao buscar usuários', error);
            }
        };

        fetchUsers();
    }, [initialValues]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersResponse = await getAllUsers();
                setUsers(usersResponse.data.users);
            } catch (error) {
                console.error('Erro ao buscar usuários', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, description, dueDate, status, selectedUser);
        setName('');
        setDescription('');
        setDueDate('');
        setStatus('');
        setSelectedUser('');
    };

    return (
        <ModalForm onSubmit={handleSubmit}>
            <InputContainer>
                <label>Nome da Tarefa</label>
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
            <InputContainer>
                <label>Data de Entrega</label>
                <Input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)} className='text-input date' />
            </InputContainer>
            <InputContainer>
                <label>Status: </label>
                <SelectStyles value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Selecione o status</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Em progresso">Em progresso</option>
                    <option value="Concluida">Concluída</option>
                </SelectStyles>
            </InputContainer>
            <InputContainer>
                <label>Responsável: </label>
                <SelectStyles value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Selecione o responsável</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </SelectStyles>
            </InputContainer>
            <Button type="submit">Criar Tarefa</Button>
        </ModalForm>
    );
};

export default NewTaskForm;
