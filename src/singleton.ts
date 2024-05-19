export class MyService {

  static instance: MyService | null = null
  private constructor(private name: string){}

  getName(){
    return this.name;
  }

  static createI(name: string){
    if(MyService.instance === null){
      console.log('Una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const servce = MyService.createI('Servicio uno');
const servce2 = MyService.createI('Servicio dos');
console.log(servce);
console.log(servce2);
