declare let title: HTMLElement | null;
declare let URLlink: Element;
declare let btn: HTMLElement | null;
declare let img: HTMLElement | null;
declare let URLlink2: HTMLCollectionOf<Element>;
declare let URLlink3: NodeListOf<Element>;
declare class PersonClass {
    name: string;
    num: string;
    constructor(name: string, num: string);
}
declare let 사람1: PersonClass;
declare class Car {
    model: string;
    price: number;
    constructor(model: string, price: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: number[];
    str: string[];
    constructor(...param: (number | string)[]);
}
declare let obj: Word;
interface Square {
    color: string;
    width: number;
}
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
type Animal = {
    name: string;
};
type Cat = {
    age: number;
} & Animal;
interface Student2 {
    name: string;
}
interface Student2 {
    score: number;
}
declare let StudentData: Student2;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface AddCart1 {
    card?: boolean;
}
interface Cart extends AddCart1 {
    product: string;
    price: number;
}
declare let 장바구니: Cart[];
interface ObjFn {
    plus: (x: number, y: number) => number;
    minus: (x: number, y: number) => number;
}
declare let testobj: {
    plus(x: number, y: number): number;
    minus(x: number, y: number): number;
};
