export class Animal{
  constructor (public name: string){}

  move(){
    console.log('caminando');
  }

  saludar(){
    return `Hola mi nombre es ${this.name}`;
  }
}

export class Dog extends Animal{

  constructor(public ladrar: string, name: string){
    super(name);
  }
}

const pinky = new Animal('Pinky');
pinky.move();
console.log(pinky.saludar());
