declare let colorRed: 'red';
declare function testFn11(a: 'hello'): 1 | 0;
declare let GameRule: "가위" | "바위" | "보";
declare function simpleGame(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[];
declare let testData: {
    readonly name: "kim";
};
declare function myFn(a: 'kim'): void;
type FnType = (a: string) => number;
declare let myFn2: FnType;
type 회원정보타입 = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: 회원정보타입;
type CutZeroType = (a: string) => string;
type RemoveDashType = (a: string) => number;
type paramFnType = (x: string, cutZero: CutZeroType, removeDash: RemoveDashType) => number;
declare let cutZero: CutZeroType;
declare let removeDash: RemoveDashType;
declare let paramFn: paramFnType;
