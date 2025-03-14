// src/services/dataService.ts
import axios from 'axios';
import { Review } from '../types/review.interface';
import { Product } from '../types/product.interface';

export const API_URL = import.meta.env.VITE_API_URL;


export async function getProduct(): Promise<Product[]>{
  try {
    const response = await axios.get(`${API_URL}/product`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
}
export async function getProductById(id: number): Promise<Product>{
  try {
    const response = await axios.get(`${API_URL}/product/${id}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
}
export async function getReviewByProductId(id: number): Promise<Review[]>{
  try {
    const response = await axios.get(`${API_URL}/review/product/${id}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar reviews:', error);
    throw error;
  }
}

export async function getReviewById(id: number): Promise<Review>{
  try {
    const response = await axios.get(`${API_URL}/review/${id}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
}

export async function getProductsByDress(dress: string) {
  try {
    const response = await axios.get(`${API_URL}/category/${dress}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
  
}
