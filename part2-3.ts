// part2-3
// Generic
// 파라미터로 타입을 지정하는 방법이다.

// Generic - extends로 지정된 타입은 사용할 수 없게 제한된다.
function 함수<GenericType>(x:GenericType[]) :GenericType{
  return x[0];
}

let a = 함수<number>([4,2]);
let b = 함수<string>(["4","2"]);
console.log(a);


interface LengthCheck{
  length : number
}

// extends
function 함수2<GenericType2 extends LengthCheck>(x:GenericType2){
  return x.length - 1;

}
함수2<string>("string");
함수2<string[]>(["string","number"]);


// [tuple type]
// tuple type은 array의 타입을 더 엄격하게 지정해주는 방식이다.
let tupleDog :[string, boolean?, number?] = ['dog'];

function tupleArr(...x :[number, string]){
  console.log(x);
}
tupleArr(111,'222');

let arr = [1,2,3];
let arr2 :[number, number, ...number[]] = [4,5,...arr];

let tea :[string, number, ...boolean[]] = [ '동서녹차', 4000, true, true, false, true, true ]

function tupleArr2( ...x :[string, boolean, ...(string | number)[]] ){
  
}
tupleArr2('a', true, 6, 3, '1', 4);

function tupleArr3( ...parm :(string | number)[] ){

  let strArr :string[] = [];
  let numArr :number[] = [];
  
  parm.forEach(x => {
    if(typeof(x) === 'string') strArr.push(x);
    if(typeof(x) === 'number') numArr.push(x);
  });

  let sortArr:[...(string | number)[]] = [...strArr, ...numArr];

  console.log(sortArr);
}
tupleArr3('b', 5, 6, 8, 'a');