import api from "./api";

export const createTask = async (name: string, description: string, status: string, dueDate: Date, userId: string, projectId: string) => {
    return await api.post("/task", { name, description, status, dueDate, user: { id: userId }, project: { id: projectId } });
};

export const getTaskById = async (taskId: string) => {
    return await api.get(`/task/${taskId}`);
};

export const getTasksByProjectId = async (projectId: string) => {
    return await api.get(`/task/project/${projectId}`);
};

export const deleteTask = async (taskId: string) => {
    return await api.delete(`/task/${taskId}`);
};

export const updateTask = async (taskId: string, name: string, description: string, status: string, dueDate: Date) => {
    return await api.put(`/task/${taskId}`, { name, description, status, dueDate });
};
