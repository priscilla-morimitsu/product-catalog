import { api } from '../api';
import { IProject } from '../interfaces/Project';
import { IRequestResponse } from '../interfaces/RequestResponse';

const endpoint = '/projects';

export const getAllProjects = async (): Promise<IProject[] | void> => {
  try {
    const response: IRequestResponse<IProject[]> = await api.get(endpoint);
    return response.data;
  } catch (err) {
    console.log(err); 
  }
};

export const getProjectById = async (id: number): Promise<IProject | void> => {
  try {
    const response: IRequestResponse<IProject> = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err); 
  }
};