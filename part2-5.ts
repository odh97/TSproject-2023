// index signature
// [key : string] 속성에 값을 지정해줄 수 있다.
// 단점 : 유연한 타입 지정은 가능하나 버그를 잡아주는 장점은 없어질 수 있다.

interface StringOnly{
  [key : string] : string, 
}

let sigUser : StringOnly = {
  0 : 'kim',
  1 : '20',
  2 : 'seoul',
}

// Recursive Index Signatures
// 반복되는 중첩을 가독성 있게 타입 지정이 가능하다.

interface MySigCss {
  'font-size' : MySigCss | number,
}

let sigCss :MySigCss = {
  'font-size' : {
    'font-size' : {
      'font-size' : 14
    }
  }
}

interface SigMyType2{
  [key : string] : string | number, 
}

let sigObj :SigMyType2 = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

interface MySigCss {
  'font-size' : MySigCss | number,
}

interface MySigCss2 {
  'font-size': number,
  [key : string] : MySigCss2 | number;
}

let sigObj2 :MySigCss2 = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}

// object type 변환기
let objTrans = {name : 'kim', age : 20}
Object.keys(objTrans);

console.log(Object.keys(objTrans));

interface TransPerson {
  age  : number,
  name : string,
}
type PersonKeys = keyof TransPerson;
let atest :PersonKeys = 'name';
console.log(atest);

type TransCar = {
  color : boolean,
  model : boolean,
  price : boolean | number,
}

  // mapping 작업
type TypeChanger<TransMyType> = {
  [key in keyof TransMyType] : string
  
}

type NewType = TypeChanger<TransCar>

type TransBus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger2<CopyType> = {
  [key in keyof CopyType] : string | number;
}

type NewType2 = TypeChanger2<TransBus>;


type TransCustom = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger3<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger3<TransCustom, boolean>;
type NewBus2 = TypeChanger3<TransCustom, string[]>

// extends 키워드와 삼항 연산자를 이용해 타입 지정 
type Age<T> = T extends string ? string : unknown ;
let Age1 : Age<string>;
let Age2 : Age<number>;

type ArrandAny<T> = T extends string[] ? T : any ;
let arrAny1 : ArrandAny<["김치","제육"]>;
let arrAny2 : ArrandAny<number>;


// arr타입 문제
type 타입추출2<T> = T extends [string, ...any] ? string : unknown;

let age1 :타입추출2<[string, number]>;
let age2 :타입추출2<[boolean, number]>; 

// infer keyword
type 타입추출<T> = T extends (infer R)[] ? R : unknown; 
type NewType3 = 타입추출< string[] > // NewType 은 string 타입입니다 


type 타입추출3<T> = T extends (x : infer R)=> any ? R : unknown;

let ReturnType1 :타입추출3<(x :number) => void>; //이러면 number가 이 자리에 남음
let ReturnType2 :타입추출3<(x :string) => void>; //이러면 string이 이 자리에 남음