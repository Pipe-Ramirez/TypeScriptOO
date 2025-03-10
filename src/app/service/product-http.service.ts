import { UpdateProductDto, CreateProductDto } from "../dto/product.dto";
import { Product } from "../model/product.model";
import { ProductService } from "../model/product.service.model";
import axios from 'axios';

export class ProductHttpService  implements ProductService{
  private url = 'http://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto){
   const { data } = await axios.put(`${this.url}/${id}`, changes);
   return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }

  async findOne(id: Product['id']){
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
