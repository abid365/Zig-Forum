import Header from "@/Layouts/Home/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div>
        <Header></Header>
      </div>
    </main>
  );
}
