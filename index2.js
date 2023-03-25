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
//
let testData = {
    name: 'kim'
};
function myFn(a) {
}
myFn(testData.name);
