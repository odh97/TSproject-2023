// REST 파라미터, destructuring 할 때 타입지정
let restFn = (...a) => {
    console.log(a);
};
restFn(1, 2, 3, 5, 6, 7, 9, 9, 9);
let destObj = { student: true, destAge: 20 };
function destFn({ student, destAge }) {
    console.log(student, destAge);
}
destFn(destObj);
function maxNm(...x) {
    let highNm = 0;
    for (let i = 0; x.length > i; i++) {
        highNm = x[i] > highNm ? x[i] : highNm;
    }
    ;
    console.log(highNm);
}
;
maxNm(9, 5, 6, 7, 8, 5, 6, 8, 3, 4);
let userData = { user: 'kim', comment: [3, 5, 4], admin: false };
function userDataFn({ user, comment, admin }) {
    console.log("user :" + user);
    console.log(comment);
    console.log("admin :" + admin);
}
userDataFn(userData);
function arrFn([a, b, c]) {
    console.log(a, b, c);
}
arrFn([40, 'wine', false]);
// Narrowing 방법들
function 함수(a) {
    if (a && typeof a === "string") { } // && 연산자
}
function 함수2(animal) {
    if ('swim' in animal) { //  in 연산자
        animal.swim;
    }
}
let date = new Date();
if (date instanceof Date) { }
; // instanceof 연산자
function 함수3(x) {
    if (x.wheel === '2개') {
        console.log('x는 BikeNarro type이다.');
    }
}
