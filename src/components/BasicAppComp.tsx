"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";
import { useState } from "react";

const BasicAppComp = () => {
  const [count, setCount] = useState(0);
  const plusFn = () => {
    setCount(count + 1);
  };
  const MinusFn = () => {
    setCount(count - 1);
  };

  return (
    <div className="space-y-8">
      <div className="text-center text-lg lg:text-2xl">
        Counter Value <span className="font-semibold"> : {count}</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={MinusFn}
          className="cursor-pointer"
          variant={"destructive"}
        >
          <CircleMinus /> Minus 1
        </Button>
        <Button
          onClick={plusFn}
          className="cursor-pointer"
          variant={"greens"}
        >
          <CirclePlus />
          Plus 1
        </Button>
      </div>
    </div>
  );
};

export default BasicAppComp;
