
export type Page = 'landing' | 'dashboard' | 'admin' | 'recipe' | 'profile';

export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  time: string;
  calories: number;
  image: string;
  category: string;
}
