// implements
// implements는 interface에 속성을 가지고 있는지 체크하는 것이다.(타입을 체크하는 문법)
// 
interface CarType {
  model : string,
  price : number
}

class ImpCar implements CarType { // ✅ implements는 
  model : string;
  price : number = 1000;
  constructor(a :string){
    this.model = a
  }
}
let myCar = new ImpCar('morning');