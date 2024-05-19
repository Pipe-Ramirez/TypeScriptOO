class MyMath{
  static readonly message = 'Mensaje de bienvenida';
  private privada = 'Mensaje privado';
  static max (...numbers: number []){
    return numbers.reduce((numMax, item) => numMax >= item ? numMax: item);
  }

  publico(){}
}

MyMath.message;
// MyMath.message = '';
// MyMath.privada = '';

const result = new MyMath();
result.publico


const param = [-12,-25,-236,-54,-74,-55];
console.log(MyMath.max(...param));
