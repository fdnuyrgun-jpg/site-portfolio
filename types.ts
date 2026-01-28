
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Expert {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}
