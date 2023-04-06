// part2-3
// Generic
// 파라미터로 타입을 지정하는 방법이다.
// Generic - extends로 지정된 타입은 사용할 수 없게 제한된다.
function 함수(x) {
    return x[0];
}
let a = 함수([4, 2]);
let b = 함수(["4", "2"]);
console.log(a);
// extends
function 함수2(x) {
    return x.length - 1;
}
함수2("string");
함수2(["string", "number"]);
// [tuple type]
// tuple type은 array의 타입을 더 엄격하게 지정해주는 방식이다.
let tupleDog = ['dog'];
function tupleArr(...x) {
    console.log(x);
}
tupleArr(111, '222');
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
let tea = ['동서녹차', 4000, true, true, false, true, true];
function tupleArr2(...x) {
}
tupleArr2('a', true, 6, 3, '1', 4);
function tupleArr3(...parm) {
    let strArr = [];
    let numArr = [];
    parm.forEach(x => {
        if (typeof (x) === 'string')
            strArr.push(x);
        if (typeof (x) === 'number')
            numArr.push(x);
    });
    let sortArr = [...strArr, ...numArr];
    console.log(sortArr);
}
tupleArr3('b', 5, 6, 8, 'a');
