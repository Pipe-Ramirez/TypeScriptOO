import { ProductMemoryService } from './service/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title:       'string',
  price:       100,
  description: 'string',
  images:      [''],
  categoryId:    1,
});

const productos = productService.getAll();
const productId = productos[0].id;

productService.update(productId, {
  title: 'Modificado',
  price: 200,
  description: 'Desc modificado'
});

const rta = productService.findOne(productId);
console.log(rta);
