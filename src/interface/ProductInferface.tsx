export interface ProductInterface {
  value: string;
  imgurl: string;
  id: number;
  title: string;
  price: number;
  stock: number;
  brand: string;
  discountPercentage: number;
  images: string[];
  rating: number;
  thumbnail: string;
  category:
    | "smartphones"
    | "laptops"
    | "fragrances"
    | "skincare"
    | "groceries"
    | "home-decoration";
  description: string;
}
