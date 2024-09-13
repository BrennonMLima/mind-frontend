import api from "./api";

export const createProject = async (name: string, description: string) => {
    return await api.post("/project", { name, description });
};

export const getProjectById = async (projectId: string) => {
    return await api.get(`/project/${projectId}`);
};

export const getAllProjects = async () => {
    return await api.get("/project");
};

export const deleteProject = async (projectId: string) => {
    return await api.delete(`/project/${projectId}`);
};

export const updateProject = async (projectId: string, name: string, description: string) => {
    return await api.put(`/project/${projectId}`, { name, description });
};
