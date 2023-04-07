declare let tipTest1: string;
declare let tipTest2: number;
declare let tipTest3: number[];
declare let nameTest: string;
declare let ageTest: number;
declare let checkTest: null;
declare let memberArrTest: Array<string>;
declare let arrTest: string[];
declare let objectTest: {
    name: string;
};
declare let objectTest2: {
    name?: string;
    data: string;
};
declare let projectTest: {
    member: string[];
    days: number;
    started: boolean;
};
declare let nameTest2: string | number;
declare let nameTest2_1: (string | number);
declare let unionArrTest: (string | number)[];
declare let unionObjTest: {
    a: string | number;
};
declare let user: string;
declare let age: undefined | number;
declare let married: boolean;
declare let 철수: (string | undefined | number | boolean)[];
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
};
declare let anyTest: any;
declare let unTest: unknown;
declare let TestData: string;
type MyType = string | number;
declare let nameTest3: MyType;
type MyType2 = {
    name: string;
    age: number;
};
declare let animal: MyType2;
type MyType3 = {
    readonly name: string;
};
declare const girlfriend: MyType3;
type TestTypeNm = string;
type TestTypeAge = number;
type Person = TestTypeNm | TestTypeAge;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType1 = PositionX & PositionY;
declare let PositionTest: NewType1;
type TestTypeObj1 = {
    color?: string;
    size: number;
    readonly position: number[];
};
type TestTypeObj2 = {
    name: string;
    phone: number;
    email: string;
};
declare let TestObj: TestTypeObj2;
type TestTypeObj3 = {
    name: string;
    phone: number;
    email: string;
    student: boolean;
};
declare function testFn(x: number): number;
declare function testFn2(x: number): void;
declare function testFn3(x: number): void;
declare function testFn4(x: number | string): void;
declare function testFn5(x: number): number;
declare function testFn6(pay: number, home: boolean, charm: string): "결혼가능" | undefined;
type Member = {
    [key: string]: string;
};
declare let john: Member;
declare class User {
    name: string;
    constructor(name: string);
}
declare function machine(skill1: string, skill2: string): void;
declare var nunu: any;
declare var garen: any;
declare class Hero {
    q: string;
    w: string;
    constructor(skill1: string, skill2: string);
}
declare class UserTest {
    firstName: string;
    lastName: string;
    age: number;
    _age: number;
    constructor(firstName: string, lastName: string, inAge: number);
    get inAge(): number;
    set inAge(value: number);
}
declare const user1: UserTest;
