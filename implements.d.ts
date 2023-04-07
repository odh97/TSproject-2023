interface CarType {
    model: string;
    price: number;
}
declare class ImpCar implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let myCar: ImpCar;
