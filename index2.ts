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
//
let testData = {
    name : 'kim'
} as const

function myFn(a:'kim'){

}
myFn(testData.name);