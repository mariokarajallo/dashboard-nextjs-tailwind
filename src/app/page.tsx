import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main");
  return <h1>Pagina principal</h1>;
}
