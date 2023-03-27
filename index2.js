// Literal Types
// const변수와 유사하게 사용 가능하다. 어떻게 보면 더 상위호환이다
let colorRed;
colorRed = 'red';
//ex1
function testFn11(a) {
    return 0;
}
testFn11("hello");
let GameRule;
function simpleGame(x) {
    return ["가위", "바위"];
}
simpleGame("가위");
// as const 문법
// object value 값을 그대로 타입으로 지정해준다.
// object 속성들에 모두 readonly를 붙여준다.
let testData = {
    name: 'kim'
};
function myFn(a) {
}
myFn(testData.name);
let myFn2 = function (a) {
    return 10;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
let cutZero = (x) => {
    if (x[0] === "0")
        return x.slice(1);
    return x;
};
console.log(cutZero("0123"));
let removeDash = (x) => {
    return parseFloat(x.replace(/-/g, ''));
};
console.log(removeDash("010-0000-3333"));
