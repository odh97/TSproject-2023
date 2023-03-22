let nameTest = 'kim';
let arrTest = ['kim', 'park'];
let objectTest = { name: 'kim' };
let objectTest2 = { data: 'kim' };
// 다양한 타입
let nameTest2 = 123;
let nameTest3 = 123;
// 함수
function testFn(x) {
    return x * 2;
}
testFn(1);
let john = { name: 'kim' };
// class 문법에 적용
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}

function machine(skill1,skill2) {
    this.q = skill1;
    this.w = skill2;
}

var nunu = new machine("consume", "null");
var garen = new machine("strike", "data");

class Hero {
    constructor(skill1, skill2){
        this.q = skill1;
        this.w = skill2;    
    }
}