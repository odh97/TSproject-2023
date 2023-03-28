let title = document.getElementById("title");
if(title instanceof Element) title.innerHTML = '반가워요';

let URLlink = document.getElementsByClassName("urlLink")[0];
if(URLlink?.innerHTML !== undefined) URLlink.innerHTML = 'kakao';
if(URLlink instanceof HTMLAnchorElement) URLlink.href = 'www.kakao.com';

let btn = document.getElementById('button');
let img = document.getElementById('image');

btn?.addEventListener('click', function(){
  if(img instanceof HTMLImageElement) img.src = "new.jpg";
});


let URLlink2 = document.getElementsByClassName("naver");

for(let i=0; URLlink2.length > i; i++){
  let urlChange = URLlink2[i];
  if(urlChange instanceof HTMLAnchorElement) urlChange.href = "https://kakao.com";
}

let URLlink3 = document.querySelectorAll('.naver');

URLlink3.forEach(e => {
});


class PersonClass {
  name :string;
  num :string;
  constructor(name :string, num :string){
    this.name = name;
    this.num = num;
  }
}

let 사람1 = new PersonClass('kim','010-3333-2222');

class Car {
  model :string;
  price :number;
  constructor(model :string, price :number){
    this.model = model;
    this.price = price;
  }

  tax() :number{
    return this.price/10;
  };
};

let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 

class Word{
  num :number[];
  str :string[];

  constructor(...param :(number | string)[]){
    let numArr :number[] = [];
    let strArr :string[] = [];

    param.forEach(e => {
      if(typeof(e) === 'number') numArr.push(e);
      if(typeof(e) === 'string') strArr.push(e);
    });

    this.num = numArr;
    this.str = strArr;
  };
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']


// interface 문법 과 type
// 외부 라이브러리같은 경우 interface를 많이 사용며 커스텀 해서 사용할 수 있다.


// interface 와 type 차이점
// interface 는 중복 선언이 가능하다. (중복 선언하면 합쳐진다고 보면된다.)
// interface 는 중복 선언이 불가능하다. 

interface Square {
  color : string,
  width : number
}

interface Student {
  name : string;
};

interface Teacher extends Student {
  age : number;
};


let 학생 :Student = {name : 'kim'};
let 선생 :Teacher = {name : 'kim', age : 20};

type Animal = {name : string};
type Cat = {age : number} & Animal;

// 중복선언 예시
interface Student2{
  name : string;
}
interface Student2{
  score : number;
}
let StudentData :Student2 = {
  name : 'kim',
  score : 50,
};

interface Product{
  brand : string,
  serialNumber : number,
  model : string[]
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface AddCart1{
  card? : boolean
}

interface Cart extends AddCart1 {
  product : string,
  price : number,
};

let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 }, { product : '청소기', price : 7000, card : false } ];


// (숙제4) object 안에 함수를 2개 넣고 싶은데요 

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
// 이 object 자료를 어떻게 만들면 될까요? 
// interface를 이용해서 object에 타입지정도 해보십시오. 

interface ObjFn{
  plus : (x:number, y:number) => number,
  minus : (x:number, y:number) => number,
}

let testobj = {
  plus(x:number, y:number){
    return x + y;
  },
  minus(x:number, y:number){
    return x - y;
  }
}