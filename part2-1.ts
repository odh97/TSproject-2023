// REST 파라미터, destructuring 할 때 타입지정

let restFn = (...a:number[])=>{
  console.log(a);
};

restFn(1,2,3,5,6,7,9,9,9);

type DestType = {
  student : boolean,
  destAge : number,
}

let destObj :DestType = {student: true, destAge : 20};

function destFn({student, destAge} :DestType){
  console.log(student,destAge);
}
destFn(destObj);

function maxNm(...x :number[]){
  let highNm :number = 0;

  for(let i=0; x.length > i; i++){
    highNm = x[i] > highNm ? x[i] : highNm;
  };

  console.log(highNm);
};
maxNm(9,5,6,7,8,5,6,8,3,4);

type UserDataType = { user : string, comment : number[], admin : boolean }; 
let userData :UserDataType = { user : 'kim', comment : [3,5,4], admin : false };

function userDataFn({ user, comment, admin}){
  console.log("user :" + user);
  console.log(comment);
  console.log("admin :" + admin);

}

userDataFn(userData);


function arrFn([a,b,c] :(string | number | boolean)[]){
  console.log(a,b,c);
}

arrFn([40, 'wine', false]);