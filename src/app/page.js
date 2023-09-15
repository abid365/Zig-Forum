import CommunitySection from "@/Layouts/Home/CommunitySection";
import Header from "@/Layouts/Home/Header";
import Space from "@/Layouts/Home/Space";
import Games from "@/Layouts/Home/Games";
import Partners from "@/Layouts/Home/Partners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <Header></Header>
        <Space></Space>
        <Partners></Partners>
        <Games></Games>
        <CommunitySection></CommunitySection>
      </div>
    </main>
  );
}
