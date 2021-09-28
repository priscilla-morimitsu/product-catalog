export interface IProject {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  goal: number;
  collected: number;
}

export interface IAmount {
  id: number;
  collected: number;
};