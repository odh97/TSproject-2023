export var exportName = 'kim';
export var exportNumber = 20;

export type exportCar = {
  wheel : number,
  model : string
}
export interface exportBike {
  wheel : 2,
  model : string
}

export type ExportObjFn = (a? :object) => void

// namespace 사용
export namespace 네임스페이스 {
  export type Name = string | number;
}