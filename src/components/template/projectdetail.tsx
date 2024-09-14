import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectById } from '../../service/projects';
import { createTask, getTasksByProjectId, deleteTask, updateTask } from '../../service/tasks';
import { Container, ContainerGrid, Main, Title, Row } from './template.styles';
import Header from '../molecules/header';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEdit, FiTrash } from "react-icons/fi";
import Button from '../atoms/button/button';
import Modal from '../molecules/modal';
import NewTaskForm from '../organism/taskform';
import UserImage from '../atoms/userimage';

interface Task {
    id: string;
    name: string;
    description: string;
    status: string;
    dueDate: string;
    user: {
        id: string;
        name: string;
        image: { type: string, data: number[] };
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
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
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

    const handleNewTaskSubmit = async (
        name: string,
        description: string,
        dueDate: string,
        status: string,
        userId: string
    ) => {
        try {
            const dueDateObject = new Date(dueDate);
            const formattedDueDate = dueDateObject.toISOString().split('T')[0];

            if (projectId) {
                if (editingTask) {
                    await updateTask(editingTask.id, name, description, status, dueDate, userId);
                    setEditingTask(null);
                } else {
                    await createTask(name, description, status, formattedDueDate, userId, projectId);
                }

                const tasksResponse = await getTasksByProjectId(projectId);
                setTasks(tasksResponse.data.tasks);
                setModalOpen(false);
            } else {
                console.error('projectId indefinido');
            }
        } catch (error) {
            console.error('Erro ao criar/editar tarefa', error);
        }
    };

    const handleDeleteTask = async (taskId: string) => {
        try {
            await deleteTask(taskId);
            const tasksResponse = await getTasksByProjectId(projectId!);
            setTasks(tasksResponse.data.tasks);
        } catch (error) {
            console.error('Erro ao deletar tarefa', error);
        }
    };

    const handleEditTask = (task: Task) => {
        setEditingTask(task);
        setModalOpen(true);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
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
                            <Button onClick={() => setModalOpen(true)}>+ Nova tarefa</Button>
                        </Row>
                        <ContainerGrid>
                            {tasks.map((task) => (
                                <Container className='task' key={task.id}>
                                    <Row className='cem top'>
                                        <Title style={{ marginBottom: '20px' }}>
                                            <h1>{task.name}</h1>
                                            <p>{task.description}</p>
                                        </Title>
                                        <FiEdit
                                            onClick={() => handleEditTask(task)}
                                            style={{ cursor: 'pointer', stroke: 'var(--vermelho)', fontSize: 20 }}
                                        />
                                    </Row>
                                    <Row className='task cem'>
                                        <div>Responsável: </div>
                                        <div>{task.user?.name || 'Nenhum responsável'}</div>
                                        <UserImage image={task.user?.image || null} />
                                    </Row>
                                    <Row className='cem'>
                                        <div>Status: {task.status}</div>
                                        <div>Prazo: {formatDate(task.dueDate)}</div>
                                    </Row>
                                    <Row className='task cem'>
                                        <FiTrash
                                            onClick={() => handleDeleteTask(task.id)}
                                            style={{ cursor: 'pointer', stroke: 'var(--vermelho)', fontSize: 20 }}
                                        />
                                    </Row>
                                </Container>
                            ))}
                        </ContainerGrid>
                    </>
                )}
            </Main>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <NewTaskForm
                    onSubmit={handleNewTaskSubmit}
                    initialValues={editingTask ? {
                        name: editingTask.name,
                        description: editingTask.description,
                        status: editingTask.status,
                        dueDate: editingTask.dueDate,
                        userId: editingTask.user.id
                    } : undefined}
                />
            </Modal>
        </div>
    );
};

export default ProjectDetailPage;
