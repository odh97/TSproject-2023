// d.ts파일은 로컬 모듈이다
// 기본적으로 import / export 하여 사용하는 것을 권장

// 글로벌 모듈 방법
// 1) tsconfig에서 "typeRoots": ["./types"] 설정을 해줘야한다.
// 2) types > common 파일 안에 넣어두면 글로벌 모듈로 설정된다.

// type 정의 보관용 파일로 사용한다.
export type AgeD = number;
export interface PersonD {name : "kim"}


// import할게 많을 경우 해결 방법
// 1) * as를 이용한 방법 (전체를 가져온다.)
import * as exportName from '../../export';
// 2) namespace를 이용한 방법 (namespace안에 정의를 해서 export 한다.)
import {네임스페이스} from '../../export';
// 3) tsconfig에서 declaration 옵션을 true로 설정
//  ㄴ ts 파일에서 타입을 생성하면 d.ts 파일에 자동으로 생성 된다.
//  ㄴ 래퍼런스용으로 d.ts를 직접 수정하는것은 안 좋다.
