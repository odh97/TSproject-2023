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
