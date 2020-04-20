import {Comment} from './Comment';

export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  img2: string;
  img3: string;
  img4: string;
  description: string;
  rating: number;
  category: number;
  comments: Comment[];
  orderCount: number;
  available: boolean;
  gender: number;
}
