export interface Book {
  id: number;
  title: string;
  description?: string;
  isAvailable: boolean;
  authorId?: number;
  image: string|null
}