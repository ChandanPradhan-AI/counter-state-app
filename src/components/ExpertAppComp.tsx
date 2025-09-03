"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";
import { useState } from "react";

const ExpertAppComp = () => {
  const [count, setCount] = useState(0);

  const plus1Fn = () => {
    if (count <= 99) {
      setCount(count + 1);
    }
  };

  const Minus1Fn = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const plus10Fn = () => {
    if (count <= 90) {
      setCount(count + 10);
    }
  };

  const Minus10Fn = () => {
    if (count >= 10) {
      setCount(count - 10);
    }
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
          disabled={count < 1}
          variant={"destructive"}
        >
          <CircleMinus /> Minus 1
        </Button>
        <Button
          onClick={plus1Fn}
          className="cursor-pointer"
          variant={"greens"}
          disabled={count > 99}
        >
          <CirclePlus />
          Plus 1
        </Button>
        <Button
          onClick={Minus10Fn}
          className="cursor-pointer"
          variant={"destructive"}
          disabled={count < 10}
        >
          <CircleMinus /> Minus 10
        </Button>

        <Button
          onClick={plus10Fn}
          className="cursor-pointer"
          variant={"greens"}
          disabled={count > 90}
        >
          <CirclePlus />
          Plus 10
        </Button>
      </div>
    </div>
  );
};

export default ExpertAppComp;
