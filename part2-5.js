// index signature
// [key : string] 속성에 값을 지정해줄 수 있다.
// 단점 : 유연한 타입 지정은 가능하나 버그를 잡아주는 장점은 없어질 수 있다.
let sigUser = {
    0: 'kim',
    1: '20',
    2: 'seoul',
};
let sigCss = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
let sigObj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let sigObj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
