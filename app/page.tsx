import Cards from "@/components/Cards";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <main className=" scroll-smooth  w-full bg-[#F1F5F9]  h-full flex flex-col items-center justify-center mt-4 ">
      <Cards />
      <Demo />
    </main>
  );
}
