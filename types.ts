
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  type: 'Grãos' | 'Moído';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProductionStep {
  title: string;
  description: string;
  image: string;
}
