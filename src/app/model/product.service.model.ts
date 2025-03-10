import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  getAll(): Promise<Product[]> | Product[];
  // update(id: Product['id']): Product[];
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  create(dto: CreateProductDto): Product | Promise<Product>;
  findOne(id: Product['id']):Product | undefined | Promise<Product>;
}
