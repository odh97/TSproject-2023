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
