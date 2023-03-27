// Literal Types
// const변수와 유사하게 사용 가능하다. 어떻게 보면 더 상위호환이다
let colorRed :'red';
colorRed = 'red';

//ex1
function testFn11(a:'hello') :1 | 0{
    return 0;
}
testFn11("hello");

let GameRule :"가위" | "바위" | "보";
function simpleGame(x :"가위" | "바위" | "보") :("가위"|"바위"|"보")[]{
    return ["가위","바위"]
}
simpleGame("가위");

// as const 문법
// object value 값을 그대로 타입으로 지정해준다.
// object 속성들에 모두 readonly를 붙여준다.
let testData = {
    name : 'kim'
} as const

function myFn(a:'kim'){

}
myFn(testData.name);


type FnType = (a :string) => number;

let myFn2 :FnType = function (a){
    return 10;
}

type 회원정보타입 = {
    name : string,
    age : number,
    plusOne : (x :number) => number,
    changeName : () => void,    
};

let 회원정보 :회원정보타입 = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }



type CutZeroType = (a :string) => string;
type RemoveDashType = (a :string) => number;

let cutZero :CutZeroType = (x)=>{
    if(x[0] === "0") return x.slice(1);
    return x;
};
console.log(cutZero("0123"));

let removeDash :RemoveDashType = (x)=>{ 
    return parseFloat(x.replace(/-/g, ''));
};
console.log(removeDash("010-0000-3333"));

