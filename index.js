//tip
// 일반적으로 선언만 해도 타입이 지정되어 있다.
let tipTest1 = "park";
let tipTest2 = 50;
let tipTest3 = [1, 2, 3];
//tip/
let nameTest = 'kim';
let ageTest = 50;
let checkTest = null;
let memberArrTest = ['kim', 'park'];
let arrTest = ['kim', 'park'];
let objectTest = { name: 'kim' };
let objectTest2 = { data: 'kim' };
let projectTest = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// 다양한 타입 (Union Type)
let nameTest2 = 123;
let nameTest2_1 = 123;
nameTest2_1 = "string";
let unionArrTest = [1, "2", 3];
let unionObjTest = {
    a: "123"
};
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// any 와 unknown
// any : 아무거나 사용할때(사용하면 타입스크립트를 사용하는 의미가 없어진다.)
let anyTest = 0;
anyTest = "string";
anyTest = [0, 1, 2];
anyTest = { name: "string" };
// unknown : any와 사용하는 방법은 같다 (조금 더 안정성이 높다.)
let unTest;
unTest = 50;
// 안정성 비교
let TestData;
let nameTest3 = 123;
// 함수
function testFn(x) {
    return x * 2;
}
testFn(1);
function testFn2(x) {
    x + 1;
}
testFn2(2);
// function testFn3(x : number | undefined) :void{ // ?를 사용할 경우 같은 의미이다.
function testFn3(x) {
    x + 1;
    console.log(x + 3);
}
function testFn4(x) {
    if (typeof (x) === "string")
        console.log("숫자가 아닙니다.");
    if (typeof (x) === "number")
        console.log(x * 3);
}
testFn4("숫자");
testFn4(3);
function testFn5(x) {
    return String(x).length;
}
console.log(testFn5(456));
function testFn6(pay, home, charm) {
    let total;
    let homeScore = 0;
    let charmScore = 0;
    //home
    if (home === true) {
        homeScore = 500;
    }
    // charm
    if (charm === "상") {
        charmScore = 100;
    }
    total = pay + homeScore + charmScore;
    if (total >= 600) {
        return "결혼가능";
    }
    ;
}
console.log(testFn6(500, false, "상"));
let john = { name: 'kim' };
// class 문법에 적용
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
// class 학습
function machine(skill1, skill2) {
    this.q = skill1;
    this.w = skill2;
}
var nunu = new machine("consume", "null");
var garen = new machine("strike", "data");
class Hero {
    q;
    w;
    constructor(skill1, skill2) {
        this.q = skill1;
        this.w = skill2;
    }
}
class UserTest {
    firstName;
    lastName;
    age;
    _age;
    constructor(firstName, lastName, inAge) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = inAge;
    }
    get inAge() {
        return this._age;
    }
    set inAge(value) {
        if (value < 0) {
            value = 0;
        }
        ;
        this._age = value;
    }
}
const user1 = new UserTest('steve', 'job', -1);
