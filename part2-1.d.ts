declare let restFn: (...a: number[]) => void;
type DestType = {
    student: boolean;
    destAge: number;
};
declare let destObj: DestType;
declare function destFn({ student, destAge }: DestType): void;
declare function maxNm(...x: number[]): void;
type UserDataType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare let userData: UserDataType;
declare function userDataFn({ user, comment, admin }: {
    user: any;
    comment: any;
    admin: any;
}): void;
declare function arrFn([a, b, c]: (string | number | boolean)[]): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare let date: Date;
type CarNarro = {
    wheel: '4개';
    color: string;
};
type BikeNarro = {
    wheel: '2개';
    color: string;
};
declare function 함수3(x: CarNarro | BikeNarro): void;
