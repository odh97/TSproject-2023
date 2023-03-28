let title = document.getElementById("title");
if (title instanceof Element)
    title.innerHTML = '반가워요';
let URLlink = document.getElementsByClassName("urlLink")[0];
if (URLlink?.innerHTML !== undefined)
    URLlink.innerHTML = 'kakao';
if (URLlink instanceof HTMLAnchorElement)
    URLlink.href = 'www.kakao.com';
let btn = document.getElementById('button');
let img = document.getElementById('image');
btn?.addEventListener('click', function () {
    if (img instanceof HTMLImageElement)
        img.src = "new.jpg";
});
let URLlink2 = document.getElementsByClassName("naver");
for (let i = 0; URLlink2.length > i; i++) {
    let urlChange = URLlink2[i];
    if (urlChange instanceof HTMLAnchorElement)
        urlChange.href = "https://kakao.com";
}
let URLlink3 = document.querySelectorAll('.naver');
URLlink3.forEach(e => {
});
class PersonClass {
    name;
    num;
    constructor(name, num) {
        this.name = name;
        this.num = num;
    }
}
let 사람1 = new PersonClass('kim', '010-3333-2222');
class Car {
    model;
    price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
    ;
}
;
let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
class Word {
    num;
    str;
    constructor(...param) {
        let numArr = [];
        let strArr = [];
        param.forEach(e => {
            if (typeof (e) === 'number')
                numArr.push(e);
            if (typeof (e) === 'string')
                strArr.push(e);
        });
        this.num = numArr;
        this.str = strArr;
    }
    ;
}
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
;
;
let 학생 = { name: 'kim' };
let 선생 = { name: 'kim', age: 20 };
let StudentData = {
    name: 'kim',
    score: 50,
};
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
;
let 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }, { product: '청소기', price: 7000, card: false }];
let testobj = {
    plus(x, y) {
        return x + y;
    },
    minus(x, y) {
        return x - y;
    }
};
