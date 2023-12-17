"use client";

import { useState } from "react";

interface Props {
  value?: number;
}
export const CartCountes = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl"> {count}</span>

      <div className="flex">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -1
        </button>
      </div>
    </>
  );
};
