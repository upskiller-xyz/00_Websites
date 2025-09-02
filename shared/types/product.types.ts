export interface ProductIconData {
  type: 'image' | 'svg';
  src?: string;
  alt?: string;
  path?: string;
}

export interface ProductContent {
  name: string;
  subtitle?: string;
  problem: string;
  solution: string;
  description?: string;
  features: string[];
}

export interface ProductConfig {
  id: string;
  status: string;
  color: string;
  buttonText: string;
  linkUrl?: string;
}

export interface Product {
  icon: ProductIconData;
  content: ProductContent;
  config: ProductConfig;
}