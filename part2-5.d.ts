interface StringOnly {
    [key: string]: string;
}
declare let sigUser: StringOnly;
interface MySigCss {
    'font-size': MySigCss | number;
}
declare let sigCss: MySigCss;
interface SigMyType2 {
    [key: string]: string | number;
}
declare let sigObj: SigMyType2;
interface MySigCss {
    'font-size': MySigCss | number;
}
interface MySigCss2 {
    'font-size': number;
    [key: string]: MySigCss2 | number;
}
declare let sigObj2: MySigCss2;
declare let objTrans: {
    name: string;
    age: number;
};
interface TransPerson {
    age: number;
    name: string;
}
type PersonKeys = keyof TransPerson;
declare let atest: PersonKeys;
type TransCar = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<TransMyType> = {
    [key in keyof TransMyType]: string;
};
type NewType = TypeChanger<TransCar>;
type TransBus = {
    color: string;
    model: boolean;
    price: number;
};
type TypeChanger2<CopyType> = {
    [key in keyof CopyType]: string | number;
};
type NewType2 = TypeChanger2<TransBus>;
type TransCustom = {
    color: string;
    model: boolean;
    price: number;
};
type TypeChanger3<MyType, T> = {
    [key in keyof MyType]: T;
};
type NewBus = TypeChanger3<TransCustom, boolean>;
type NewBus2 = TypeChanger3<TransCustom, string[]>;
type Age<T> = T extends string ? string : unknown;
declare let Age1: Age<string>;
declare let Age2: Age<number>;
type ArrandAny<T> = T extends string[] ? T : any;
declare let arrAny1: ArrandAny<["김치", "제육"]>;
declare let arrAny2: ArrandAny<number>;
type 타입추출2<T> = T extends [string, ...any] ? string : unknown;
declare let age1: 타입추출2<[string, number]>;
declare let age2: 타입추출2<[boolean, number]>;
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type NewType3 = 타입추출<string[]>;
type 타입추출3<T> = T extends (x: infer R) => any ? R : unknown;
declare let ReturnType1: 타입추출3<(x: number) => void>;
declare let ReturnType2: 타입추출3<(x: string) => void>;
