export type Warehouse = {
  id: number;
  warehouse: string;
  availability: boolean;
  price: number;
  created_at: Date;
  warehouseType: string;
  squaremeters: number;
  frontTop: number;
  frontLeft: number;
  backTop: number;
  backLeft: number;
  warehouseWidth: number;
  warehouseHeight: number;
  warehouseLength: number;
  warehouseCapacity: number;
};
