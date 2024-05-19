import axios from "axios";
import { Product } from './model/product.model';
(async()=>{

  async function getProduct(){
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const result = await getProduct();
  let num = 0;
  result.map( item => console.log(`${num = num +1} - ${item.id} ${item.title}`));

})();
