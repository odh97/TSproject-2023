console.log(sampleA);
// ts에서 export와 import
// ✅ambient module(글로벌 모듈)
// 모든 ts의 파일들에서 export와 import 없이 사용이 가능하다.
import { sampleC } from './data2';
console.log(sampleC);
// 로컬 모듈 안에서 글로벌 모듈로 지정해주기
let a = "10";
