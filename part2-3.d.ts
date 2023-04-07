declare let a: number;
declare let b: string;
interface LengthCheck {
    length: number;
}
declare let tupleDog: [string, boolean?, number?];
declare function tupleArr(...x: [number, string]): void;
declare let arr: number[];
declare let arr2: [number, number, ...number[]];
declare let tea: [string, number, ...boolean[]];
declare function tupleArr2(...x: [string, boolean, ...(string | number)[]]): void;
declare function tupleArr3(...parm: (string | number)[]): void;
