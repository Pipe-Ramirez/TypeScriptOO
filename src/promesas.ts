import axios from "axios";

(async()=>{
  function delay(time: number){
    const promesa = new Promise<string>((resolve)=>{
      setTimeout(()=>{
        resolve('Felipe');
      }, time);
    });
    return promesa;
  }

  function getProduct(){
    const promesa = axios.get('https://api.escuelajs.co/api/v1/products');
    return promesa;
  }

  const result = await getProduct();
  console.log(result.data[0]);

})();
