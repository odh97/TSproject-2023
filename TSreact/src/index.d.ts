import './index.css';
declare const store: any;
export type RootState = ReturnType<typeof store.getState>;
declare let store2: any;
export type RootState2 = ReturnType<typeof store2.getState>;
export declare let increment: any, decrement: any, incrementByAmount: any;
export {};
