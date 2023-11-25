"use client";
import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaTrash, FaWeightHanging } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useKnapsack from "./useKnapsack";
import { ItemType, KnapsackOutputType, KnapsackType } from "./types";

export function Knapsack() {
  const [knapsack, setKnapsack] = useState<KnapsackType>({
    capacity: 0,
    items: [
      {
        value: 0,
        weight: 0,
        name: "",
      },
    ],
  });

  const [knapsackOutput, setKnapsackOutput] = useState<KnapsackOutputType>({
    maxValue: 0,
    indexes: [],
  });

  const handleNumberOfItemsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numItems = parseInt(event.target.value, 10);
    setKnapsackOutput({
      maxValue: 0,
      indexes: [],
    });

    setKnapsack((prevKnapsack) => {
      const existingItems = prevKnapsack.items || [];
      const newItems = Array.from(
        { length: numItems - existingItems.length },
        () => ({
          value: 0,
          weight: 0,
          name: "",
        })
      );

      return {
        ...prevKnapsack,
        items: [...existingItems, ...newItems],
      };
    });
  };

  const handleCapacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKnapsackOutput({
      maxValue: 0,
      indexes: [],
    });
    const newCapacity = parseInt(event.target.value, 10);

    setKnapsack((prevKnapsack) => ({
      ...prevKnapsack,
      capacity: newCapacity > 0 ? newCapacity : 0,
    }));
  };

  const handleItemChange = (
    index: number,
    field: keyof ItemType,
    value: number | string
  ) => {
    setKnapsackOutput({
      maxValue: 0,
      indexes: [],
    });
    setKnapsack((prevKnapsack) => {
      const updatedItems = [...prevKnapsack.items];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      return { ...prevKnapsack, items: updatedItems };
    });
  };

  const handleAddItem = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setKnapsackOutput({
      maxValue: 0,
      indexes: [],
    });
    setKnapsack((prevKnapsack) => ({
      ...prevKnapsack,
      items: [...prevKnapsack.items, { value: 0, weight: 0, name: "" }],
    }));
  };

  const handleDeleteItem = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    setKnapsackOutput({
      maxValue: 0,
      indexes: [],
    });
    setKnapsack((prevKnapsack) => {
      const updatedItems = [...prevKnapsack.items];
      updatedItems.splice(index, 1);
      return { ...prevKnapsack, items: updatedItems };
    });
  };

  const calculateResult = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { maxValue, indexes } = useKnapsack(knapsack);
    setKnapsackOutput({ maxValue, indexes });
  };

  return (
    <Card className="max-h-full  w-1/2 pt-4 bg-white">
      <CardHeader className="flex flex-row space-x-4 justify-between ">
        <div className="grid gap-1">
          <CardTitle>0/1 Knapsack Problem</CardTitle>
          <CardDescription>
            Calculate the maximum value of the knapsack
          </CardDescription>
        </div>
        <Button
          className="w-1/3 py-2 bg-green-700 hover:bg-green-500 text-white rounded-md"
          onClick={calculateResult}
          disabled={knapsack.items.length === 0}
        >
          Calculate
        </Button>
      </CardHeader>

      <CardContent>
        <form className="grid gap-4 md:gap-6">
          <div className="flex flex-row gap-4">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="capacity">
                Knapsack Capacity
              </Label>
              <Input
                id="capacity"
                placeholder="Enter capacity"
                type="number"
                value={knapsack.capacity}
                onChange={handleCapacityChange}
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="num-items">
                Number of Items
              </Label>
              <div className="flex gap-2">
                <Input
                  id="num-items"
                  placeholder="Enter number of items"
                  type="number"
                  value={knapsack.items.length}
                  onChange={handleNumberOfItemsChange}
                />
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1"
                  onClick={handleAddItem}
                >
                  Add Item
                </Button>
              </div>
            </div>
          </div>
          {knapsack.items.length > 0 ? (
            <Label className="text-base" htmlFor="items">
              {`${
                knapsackOutput.indexes.length > 0
                  ? "Max Value is : " +
                    knapsackOutput.maxValue +
                    " , Selected Items are highlighed "
                  : "Items : "
              }`}
            </Label>
          ) : (
            <></>
          )}

          <ScrollArea className="max-h-48">
            {knapsack.items.map((item, index) => (
              <div className="py-1" key={index}>
                <div
                  className={`flex flex-row gap-2 ${
                    knapsackOutput.indexes.indexOf(index) !== -1
                      ? " bg-green-400"
                      : "bg-gray-200"
                  } p-2 rounded-md`}
                >
                  <input
                    type="text"
                    placeholder={`item-${index}`}
                    className="w-1/3 bg-transparent focus:outline-none text-center flex items-center"
                  />
                  <div className="flex flex-row relative">
                    <Input
                      id={`item-${index + 1}-weight`}
                      placeholder="Weight"
                      type="number"
                      value={item.weight}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "weight",
                          parseInt(e.target.value, 10) || 0
                        )
                      }
                    />
                    <FaWeightHanging
                      className="absolute right-[-4px] top-[-4px]"
                      size="15px"
                    />
                  </div>
                  <div className="flex flex-row relative">
                    <Input
                      id={`item-${index + 1}-value`}
                      placeholder="Value"
                      type="number"
                      value={item.value}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "value",
                          parseInt(e.target.value, 10) || 0
                        )
                      }
                    />
                    <RiMoneyDollarCircleFill
                      className="absolute right-[-4px] top-[-4px]"
                      size="20px"
                    />
                  </div>
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md p-2"
                    size="icon"
                    variant="destructive"
                    onClick={(event) => handleDeleteItem(event, index)}
                  >
                    <FaTrash size="20px" />
                  </Button>
                </div>
              </div>
            ))}
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </form>
      </CardContent>
    </Card>
  );
}
