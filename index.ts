let nameTest : string = 'kim';
let arrTest : string[] = ['kim', 'park'];
let objectTest : {name : string} = {name : 'kim'};
let objectTest2 : {name? : string, data : string} = {data : 'kim'};

// 다양한 타입
let nameTest2 : string | number = 123;

// 타입 변수
type MyType = string | number;

let nameTest3 : MyType = 123;

// 함수
function testFn(x : number) :number{ //리턴할 경우에 추가적으로 타입 설정 가능
    return x * 2
}
testFn(1);

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