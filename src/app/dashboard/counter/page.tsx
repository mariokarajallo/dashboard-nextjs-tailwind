import { CartCountes } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Contador de productos en el carrito",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Producos en el carrito</span>
      <CartCountes value={20} />
    </div>
  );
}
