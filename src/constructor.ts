export class MyDate {
  // Se debe especificar public o private para indicar que la propiedad es para toda la clase
  // Se automatiza con los parametros que se envía
  constructor(
    public day: number = 4,
    public month: number = 8,
    private year: number = 1991,
    ejemplo: number = 10
  ){
    this.day;
    this.year;
    ejemplo = 15;
    day = 0;
    year = 1991;
  }
  print(){
    this.day;
    this.month;
    this.year;
  }

}
