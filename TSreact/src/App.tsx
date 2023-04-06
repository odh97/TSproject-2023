import React, { useState } from 'react';
import './App.css';
import { JsxElement } from 'typescript';
import { useDispatch, useSelector } from 'react-redux';
import {RootState, RootState2, increment} from './index';
import { Dispatch } from 'redux'; //dispatch error check

let box :JSX.Element = <div></div>;

function App() {

  let [user, setUser] = useState('kim');
  // string or number
  let [user2, setUser2] = useState<string | number>(123);
  
  const 꺼내온거 = useSelector( (state : RootState)=>state );
  const 꺼내온거2 = useSelector( (state : RootState2)=>state );
  const dispatch = useDispatch();

  return (
    <div>
      <h4>안녕하세요</h4>
      <Profile name="철수" />

      <div id='old-version'>
        {꺼내온거.count}
        <button onClick={()=>{dispatch({type : '증가'})}}>버튼</button>
      </div>

      <div id='new-version'>{/*Provider store2로 변경 후 확인 */}
        {꺼내온거2.counter1.count}
        <button onClick={()=>{dispatch(increment())}}>버튼</button>
      </div>
    </div>
  );
}

type propsType = {
  name : String;
}

function Profile(props :propsType) :JSX.Element{
  return(
    <div>프로필입니다.</div>
  )
}

export default App;
