export type ItemType = {
  value: number;
  weight: number;
  name: string;
};

export type KnapsackType = {
  capacity: number;
  items: ItemType[];
};
export type KnapsackOutputType = {
  maxValue: number;
  indexes: number[];
};
