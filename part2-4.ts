// declare
// 다른 js 파일에 있는 코드를 사용할때 사용한다.
// declare로 정의한 것은 js로 변환해주지는 않는다.
declare let sampleA :number;

console.log(sampleA);

// ts에서 export와 import
// ✅ambient module(글로벌 모듈)
// 모든 ts의 파일들에서 export와 import 없이 사용이 가능하다.
import {sampleC} from './data2';
import {AgeD} from './types/common/test';

console.log(sampleC);

// 로컬 모듈 안에서 글로벌 모듈로 지정해주기
let a = "10";
declare global{
  type Dog = string;
}

// 로컬 모듈로 만들기
export {};

