
// public private protected static
// public (기본값으로 설정되어있다.)
// 수정을 가능하게 해준다.

class UserPb{
  name : string;
  constructor(a :string){
    this.name = a;
  }
}

let userPb = new UserPb('park');
userPb.name = 'Hello'

// 활용1
class PersonPb {
  constructor(public name:string){ //파라미터 값을 바로 지정해줄 수 있다.

  }
}
new PersonPb('kim');

// private
// 다른곳에서 수정이 불가능하다.
// ex1) react-redux 같은곳에서 자주 사용한다.
// ex2) 외부에서 수정 및 변경을 막아준다. (함부로 수정을 못하게 막아주는 역할을 한다.)

class UserPriv{
  name : string;
  private familyName : string = "kim";

  constructor(a :string){
    this.name = a + this.familyName;
  }

  nameChange(){ // 만약 private을 변경하고 싶으면 수정 함수를 만들어서 사용하면 된다.
    this.familyName = 'park';
  }

}

let userPriv = new UserPriv('민수');
// userPriv.familyName = 'Hello'; (error)
console.log(userPriv);
userPriv.nameChange(); // 수정함수실행

// protected
// private과 같은 역할을 하지만 좀 더 확장성이 좋다.
// extends된 class는 사용가능
class UserPro {
  protected x = 10;
}

class NewUser extends UserPro {
  doThis(){
    this.x = 20;
  }
}

// static
// 자식 object에 물려주지 않는다.
// extends를 사용 가능
// 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다. 
class UserSta{
  static x = 10;
  y = 20;
}

let 자식 = new UserSta();
console.log(자식);


class UserSta2{
  static skill = "js";
  intro = UserSta2.skill + "전문가입니다.";
}

UserSta2.skill = 'ts';

let 철수2 = new UserSta2();
console.log(철수2);

// Problem

class ProblemObj1{
  private static x = 10; // class 외부에서 수정이 불가능하며 자식 obj에도 물려주지 않는다.
  public static y = 20; // class 외부에서 수정이 가능하며 자식 obj에는 물려주지 않는다.
  protected z = 30; // class 외부에서 수정이 불가능 하지만 extends된 class에서는 수정이 가능하다.
}

class ProblemObj2 {
  private static x:number = 10;
  public static y = 20;

  addOne(a:number){
    let copy = ProblemObj2.x;
    copy = a + copy;

    console.log(copy);
  }

  printX(){
    console.log(ProblemObj2.x);
  }
}

let problemObj2 = new ProblemObj2; 

problemObj2.addOne(3); //이렇게 하면 x가 3 더해져야함
problemObj2.addOne(4); //이렇게 하면 x가 4 더해져야함
problemObj2.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square{
  width : number;
  height : number;
  color : string;
  constructor(w :number, h :number, c :string){
    this.width = w;
    this.height = h;
    this.color = c;
  }

  draw(){
    let itemBox = document.getElementById("createBox");
    let createDiv = document.createElement("div");

    let ranLeft = (400 - this.width) * Math.random();
    let ranTop = (400 - this.height) * Math.random();

    let styleTemplate = `
      left: ${ranLeft}px;
      top: ${ranTop}px;
      width: ${this.width}px;
      height: ${this.height}px;
      background-color: ${this.color};
      position: absolute;
    `

    createDiv.setAttribute("style", styleTemplate);

    if(itemBox instanceof Element){
      itemBox.append(createDiv);
    }
    
  }
}

let 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();

import {exportName, exportNumber, exportCar, exportBike, ExportObjFn} from './export.js';

let newCar:exportCar = {
  wheel : 4,
  model : "K9",
};

let newBike:exportBike = {
  wheel : 2,
  model : "KR모터스",
};
console.log("exportName : "+exportName);

let importFn :ExportObjFn = function(a){
  console.log(a)
}

