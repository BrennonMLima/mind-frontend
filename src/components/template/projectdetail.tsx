import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectById } from '../../service/projects';
import { getTasksByProjectId } from '../../service/tasks';
import { Container, ContainerGrid, Main, Task, Title, Row } from './template.styles';
import Header from '../molecules/header';
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from '../atoms/button/button';

interface Task {
    id: string;
    name: string;
    description: string;
    status: string;
    dueDate: string;
    user: {
        id: string;
        name: string;
    };
}

interface Project {
    id: string;
    name: string;
    description: string;
}

const ProjectDetailPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjectDetails = async () => {
            if (projectId) {
                try {
                    const projectResponse = await getProjectById(projectId);
                    setProject(projectResponse.data.project);
                    const tasksResponse = await getTasksByProjectId(projectId);
                    setTasks(tasksResponse.data.tasks);
                } catch (error) {
                    console.error('Erro ao carregar projeto e tasks', error);
                }
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <div className='App'>
            <Header />
            <Main>
                {project && (
                    <>
                        <Row>
                            <IoMdArrowRoundBack onClick={handleClick}
                                style={{
                                    fill: 'var(--vermelho)',
                                    fontSize: '50px',
                                    cursor: 'pointer'
                                }}
                            />
                            <Title><h1>{project.name}</h1> <p>{project.description}</p></Title>
                            <Button >+ Nova tarefa</Button>
                        </Row>
                        <ContainerGrid>
                            {tasks.map((task) => (
                                <Container>
                                    <div key={task.id}>
                                        <div>Nome: {task.name}</div>
                                        <div>Descrição: {task.description}</div>
                                        <div>Responsável: {task.user?.name || 'Nenhum responsável'}</div>
                                        <div>Status: {task.status}</div>
                                        <div>Data de entrega: {task.dueDate}</div>
                                    </div>
                                </Container>
                            ))}
                        </ContainerGrid>
                    </>
                )}
            </Main>
        </div>
    );
};

export default ProjectDetailPage;
