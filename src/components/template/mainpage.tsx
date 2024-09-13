import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../molecules/header';
import { Container, ContainerGrid, Main, Task } from './template.styles';
import { getTasksByProjectId } from '../../service/tasks';
import { createProject, getAllProjects } from '../../service/projects';
import Button from '../atoms/button/button';
import Modal from '../molecules/modal';
import NewProjectForm from '../organism/form';

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
                console.error("Erro ao buscar projetos e tasks", error);
            }
        };

        fetchProjectsAndTasks();
    }, []);

    const handleNewProjectSubmit = async (name: string, description: string) => {
        try {
            await createProject(name, description);
            setModalOpen(false);
            const projectsResponse = await getAllProjects();
            setProjects(projectsResponse.data.projects);
        } catch (error) {
            console.error('Erro ao criar projeto', error);
        }
    };

    const handleProjectClick = (projectId: string) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div className="App">
            <Header />
            <Main>
                <Button onClick={() => setModalOpen(true)}>+ Novo projeto</Button>
                <ContainerGrid>
                    {projects.map((project) => (
                        <Container style={{ cursor: 'pointer' }} key={project.id} onClick={() => handleProjectClick(project.id)}>
                            <h1>{project.name}</h1>
                            {tasks[project.id] && tasks[project.id].map((task) => (
                                <Task key={task.id}>
                                    <div>{task.name}</div>
                                    <div>{task.status}</div>
                                    <div>{task.dueDate}</div>
                                    <div>{task.user.name}</div>
                                </Task>
                            ))}
                        </Container>
                    ))}
                </ContainerGrid>
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <NewProjectForm onSubmit={handleNewProjectSubmit} />
                </Modal>
            </Main>
        </div>
    );
};

export default MainPage;
