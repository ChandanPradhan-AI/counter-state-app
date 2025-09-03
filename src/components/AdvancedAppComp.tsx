"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";
import { useState } from "react";

const AdvancedAppComp = () => {
  const [count, setCount] = useState(0);
  const plus1Fn = () => {
    setCount(count + 1);
  };
  const Minus1Fn = () => {
    setCount(count - 1);
  };
  const plus10Fn = () => {
    setCount(count + 10);
  };
  const Minus10Fn = () => {
    setCount(count - 10);
  };

  return (
    <div className="space-y-8">
      <div className="text-center text-lg lg:text-2xl">
        Counter Value <span className="font-semibold"> : {count}</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={Minus1Fn}
          className="cursor-pointer"
          variant={"destructive"}
        >
          <CircleMinus /> Minus 1
        </Button>
        <Button
          onClick={plus1Fn}
          className="cursor-pointer"
          variant={"greens"}
        >
          <CirclePlus />
          Plus 1
        </Button>
        <Button
          onClick={Minus10Fn}
          className="cursor-pointer"
          variant={"destructive"}
        >
          <CircleMinus /> Minus 10
        </Button>

        <Button
          onClick={plus10Fn}
          className="cursor-pointer"
          variant={"greens"}
        >
          <CirclePlus />
          Plus 10
        </Button>
      </div>
    </div>
  );
};

export default AdvancedAppComp;
