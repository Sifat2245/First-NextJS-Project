import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./products/Products";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
    </div>
  );
}
