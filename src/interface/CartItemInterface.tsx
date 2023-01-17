import { ProductInterface } from './ProductInferface';

export interface CartItemInterface extends ProductInterface {
  quantity: number;
}
