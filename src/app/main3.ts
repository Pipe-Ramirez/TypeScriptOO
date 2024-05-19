import { ProductHttpService } from "./service/product-http.service";

(async()=>{
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));
  console.log('getAll');

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products[1]);

  const productId = products[1].id;

  console.log('--'.repeat(10));
  console.log('update');
  await productService.update(productId,{
    price: 550,
    title: 'New Product',
    description: 'New Description',
  });

  console.log('--'.repeat(10));
  console.log('findOne');
  const myProduct = await productService.findOne(productId);
  console.log(myProduct);

})();
