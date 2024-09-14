import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../molecules/header';
import { Container, ContainerGrid, Main, Row, Task } from './template.styles';
import { getTasksByProjectId } from '../../service/tasks';
import { createProject, getAllProjects, deleteProject, updateProject } from '../../service/projects';
import Button from '../atoms/button/button';
import Modal from '../molecules/modal';
import NewProjectForm from '../organism/projectform';
import { FiEdit, FiTrash } from 'react-icons/fi';

interface Project {
    id: string;
    name: string;
    description: string;
}

interface Task {
    id: string;
    name: string;
    status: string;
    dueDate: string;
    user: {
        id: string;
        name: string;
    };
}


const MainPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({});
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjectsAndTasks = async () => {
            try {
                const projectsResponse = await getAllProjects();
                const projectsData = projectsResponse.data.projects;
                setProjects(projectsData);

                const tasksData: { [key: string]: Task[] } = {};
                for (const project of projectsData) {
                    const tasksResponse = await getTasksByProjectId(project.id);
                    tasksData[project.id] = tasksResponse.data.tasks.slice(0, 3);
                }
                setTasks(tasksData);
            } catch (error) {
                console.error('Erro ao excluir projeto', error);
            }
        };

        fetchProjectsAndTasks();
    }, []);

    const handleDeleteProject = async (projectId: string) => {
        try {
            await deleteProject(projectId);
            setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
        } catch (error) {
            console.error('Erro ao excluir projeto', error);
        }
    };

    const handleNewProjectSubmit = async (name: string, description: string) => {
        if (editingProject) {
            try {
                await updateProject(editingProject.id, name, description);
                setModalOpen(false);
                const projectsResponse = await getAllProjects();
                setProjects(projectsResponse.data.projects);
                setEditingProject(null);
            } catch (error) {
                console.error('Erro ao atualizar o projeto', error);
            }
        } else {
            try {
                await createProject(name, description);
                setModalOpen(false);
                const projectsResponse = await getAllProjects();
                setProjects(projectsResponse.data.projects);
            } catch (error) {
                console.error('Erro ao criar projeto', error);
            }
        }
    };

    const handleProjectClick = (projectId: string) => {
        navigate(`/projects/${projectId}`);
    };

    const handleEditProjectClick = (project: Project) => {
        setEditingProject(project);
        setModalOpen(true);
    };

    return (
        <div className="App">
            <Header />
            <Main>
                <Button onClick={() => {
                    setEditingProject(null);
                    setModalOpen(true);
                }}>
                    + Novo projeto
                </Button>
                <ContainerGrid>
                    {projects.map((project) => (
                        <Container style={{ cursor: 'pointer' }} key={project.id} onClick={() => handleProjectClick(project.id)}>
                            <Row className='cem'>
                                <h1>{project.name}</h1>
                                <FiEdit
                                    style={{ fontSize: '30px', stroke: 'var(--vermelho)', cursor: 'pointer' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEditProjectClick(project);
                                    }}
                                />
                            </Row>
                            <Task className='header'>
                                <div>Nome</div>
                                <div>Status</div>
                                <div>Data</div>
                                <div>Resp.</div>
                            </Task>
                            {tasks[project.id] && tasks[project.id].length > 0 ? (
                                tasks[project.id].map((task) => (
                                    <Task key={task.id}>
                                        <div>{task.name}</div>
                                        <div>{task.status}</div>
                                        <div>{task.dueDate}</div>
                                        <div>{task.user.name}</div>
                                    </Task>
                                ))
                            ) : (
                                <Task>
                                    <div>Sem tarefas para esse projeto.</div>
                                </Task>
                            )}
                            <Row className='cem end'>
                                <FiTrash
                                    style={{ fontSize: '30px', stroke: 'var(--vermelho)', cursor: 'pointer' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteProject(project.id);
                                    }}
                                />
                            </Row>
                        </Container>
                    ))}
                </ContainerGrid>
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <NewProjectForm
                        onSubmit={handleNewProjectSubmit}
                        initialValues={editingProject ? { name: editingProject.name, description: editingProject.description } : undefined}
                    />
                </Modal>
            </Main>
        </div>
    );
};

export default MainPage;
