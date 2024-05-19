export class MyDate {
  // Se debe especificar public o private para indicar que la propiedad es para toda la clase
  // Se automatiza con los parametros que se envía
  constructor(
    public day: number = 4,
    private _month: number = 8,
    private _year: number = 1991,
    ejemplo: number = 10
  ){

  }
  print(){
    this.day;
    this.month;
    this.year;
  }

  get year(){ return this._year; }
  set year(data){ this._year = data; }


  get month(){ return this._month; }
  set month(data){
    if(data >= 1 && data <= 12){
      this._month = data;
    }else{
      throw console.error('Dato no valido.');

    }
  }
}

const result = new MyDate();
result.year;

result.month;
result.month = 15;
