import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

interface Counter {
  count : number
}

const 초기값 :Counter  = { count: 0 };

function reducer(state = 초기값, action :{type : string}) {
  if (action.type === '증가') {
    return { count : state.count + 1 };
  } else if (action.type === '감소'){
    return { count : state.count - 1 };
  } else {
    return 초기값;
  }
}

const store = createStore(reducer);

// store의 타입 미리 export 해두기 
export type RootState = ReturnType<typeof store.getState>







import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const 초기값2 = { count: 0, user : 'kim' };

const counterSlice = createSlice({
  name: 'counter',
  initialState : 초기값2,
  reducers: {
    increment (state){
      state.count += 1
    },
    decrement (state){
      state.count -= 1
    },
    incrementByAmount (state, action :PayloadAction<number>){
      state.count += action.payload
    }
  }
})

let store2 = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})

// state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState2 = ReturnType<typeof store2.getState>

// 수정방법 만든거 export
export let {increment, decrement, incrementByAmount} = counterSlice.actions










const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store2}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
