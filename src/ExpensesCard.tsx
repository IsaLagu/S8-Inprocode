import { useState } from "react";
import ExpensesBarChart from "./ExpensesBarChart";

const ExpensesCard = () => {
  const [dayValue, setDayValue] = useState<number>();

  const handleClickItem = (label: string, value: number) => {
    setDayValue(value);
  };

  return (
    <div className="p-6 w-full bg-white border border-gray-200 rounded-lg">
      <div className="h-[300px]">
        <ExpensesBarChart onClickItem={handleClickItem} />
      </div>
      <div className="border-2 border-neutral-400 border-x-0 border-b-0 mt-6">
        <p className="mt-6 text-neutral-400 text-sm">Today expenses</p>
        <div className="text-3xl font-bold">{dayValue} €</div>
      </div>
    </div>
  );
};

export default ExpensesCard;
