//tip
// 일반적으로 선언만 해도 타입이 지정되어 있다.
let tipTest1 = "park";
let tipTest2 = 50;
let tipTest3 = [1,2,3];
//tip/

let nameTest : string = 'kim';
let ageTest : number = 50;
let checkTest : null = null;

let memberArrTest : Array<string> = ['kim', 'park'];
let arrTest : string[] = ['kim', 'park'];
let objectTest : {name : string} = {name : 'kim'};
let objectTest2 : {name? : string, data : string} = {data : 'kim'};

let projectTest:{
    member : string[],
    days : number,
    started : boolean,
    } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

// 다양한 타입 (Union Type)
let nameTest2 : string | number = 123;
let nameTest2_1 : (string | number) = 123;
nameTest2_1 = "string";
let unionArrTest : (string | number)[] = [1,"2",3];
let unionObjTest : {
    a:string | number
} = {
    a : "123"
};

let user:string = 'kim';
let age:undefined|number = undefined;
let married:boolean = false; 
let 철수:(string|undefined|number|boolean)[] = [user, age, married];

let 학교:{
    score : (number|boolean)[],
    teacher : string,
    friend : string|string[],
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];





// any 와 unknown
    // any : 아무거나 사용할때(사용하면 타입스크립트를 사용하는 의미가 없어진다.)
    let anyTest : any = 0;
    anyTest = "string";
    anyTest = [0,1,2];
    anyTest = {name : "string"};

    // unknown : any와 사용하는 방법은 같다 (조금 더 안정성이 높다.)
    let unTest : unknown;
    unTest = 50;

    // 안정성 비교
    let TestData : string;
    // ex1)
    // TestData = anyTest;
    // TestData = unTest;
    
    // ex2)
    // anyTest - 1;
    // unTest - 1;
    



// 타입 변수
type MyType = string | number;

let nameTest3 : MyType = 123;




// 함수
function testFn(x : number) :number{ //리턴할 경우에 추가적으로 타입 설정 가능
    return x * 2
}
testFn(1);

function testFn2(x : number) :void{ // 리턴을 사용 하지 않을때 사용
    x + 1
}
testFn2(2);

// function testFn3(x : number | undefined) :void{ // ?를 사용할 경우 같은 의미이다.
function testFn3(x? : number) :void{ // 리턴을 사용 하지 않을때 사용
    x + 1
    console.log(x + 3);
}


function testFn4(x : number | string) :void{
    if( typeof(x) === "string" ) console.log("숫자가 아닙니다.")
    if( typeof(x) === "number" ) console.log(x * 3);
}

testFn4("숫자");
testFn4(3);

function testFn5(x : number) :number{
    return String(x).length;
}

console.log( testFn5(456) );

function testFn6(pay :number,home :boolean, charm :string): string{
    let total :number;
    let homeScore :number = 0;
    let charmScore :number = 0;

    //home
    if(home === true){homeScore = 500;}

    // charm
    if(charm === "상"){charmScore = 100}

    total = pay + homeScore + charmScore;

    if(total >= 600){return "결혼가능"};

}
console.log(testFn6(500, false, "상"));



// array에 사용하는 tuple타입
type Member = {
    [key : string] : string
};
let john : Member = { name : 'kim' }

// class 문법에 적용
class User { 
    name : string;
    constructor(name : string){
        this.name = name;
    }
}










// class 학습
function machine(skill1 : string, skill2 : string) {
    this.q = skill1;
    this.w = skill2;
}

var nunu = new machine("consume", "null");
var garen = new machine("strike", "data");

class Hero {
    q : string
    w : string

    constructor(skill1 : string, skill2 : string){
        this.q = skill1;
        this.w = skill2;    
    }
}


class UserTest{
    firstName : string
    lastName : string
    age : number
    _age : number

    constructor(firstName : string, lastName : string, inAge : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = inAge;
    }

    get inAge(){
        return this._age;
    }
    
    set inAge(value){
        if(value < 0){value = 0};
        this._age = value;
    }
}

const user1 = new UserTest('steve', 'job', -1);