export type Root = Root2[];

export interface Root2 {
  id: string;
  name: string;
  cost: number;
  createdAt: string;
  category: string;
  imagesIds: string[];
  location: string;
  isActive: boolean;
}
