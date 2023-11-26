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

export type KnapsackItem = {
  value: number;
  weight: number;
};

export type KnapsackResult = {
  maxValue: number;
  indexes: number[];
};
