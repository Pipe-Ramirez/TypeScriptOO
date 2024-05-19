import { UpdateProductDto } from "../dto/product.dto";
import { Category } from "../model/category.model";
import { Product } from "../model/product.model";
import axios from "axios";

export class BaseHttpService <TypeClass>{
  constructor(
    private url: string
  ){}

  async getAll(){
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }

  async update<ID, DTO>(id:ID, changes: DTO){
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}


(async()=>{
  const uri1 = 'http://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(uri1);
  const misProductos = await productService.getAll();
  console.log(misProductos.length);

  productService.update<Product['id'], UpdateProductDto>(1,{})


  const uri2 = 'http://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(uri2);
  const misCate = await categoryService.getAll();
  console.log(misCate[1]['name']);

})();
