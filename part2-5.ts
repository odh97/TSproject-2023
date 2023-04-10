// index signature
// [key : string] 속성에 값을 지정해줄 수 있다.
// 단점 : 유연한 타입 지정은 가능하나 버그를 잡아주는 장점은 없어질 수 있다.

interface StringOnly{
  [key : string] : string, 
}

let sigUser : StringOnly = {
  0 : 'kim',
  1 : '20',
  2 : 'seoul',
}

// Recursive Index Signatures
// 반복되는 중첩을 가독성 있게 타입 지정이 가능하다.

interface MySigCss {
  'font-size' : MySigCss | number,
}

let sigCss :MySigCss = {
  'font-size' : {
    'font-size' : {
      'font-size' : 14
    }
  }
}

interface SigMyType2{
  [key : string] : string | number, 
}

let sigObj :SigMyType2 = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

interface MySigCss {
  'font-size' : MySigCss | number,
}

interface MySigCss2 {
  'font-size': number,
  [key : string] : MySigCss2 | number;
}

let sigObj2 :MySigCss2 = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}