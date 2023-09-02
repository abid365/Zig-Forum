import Ask from "@/Layouts/Home/Ask";
import CommunitySection from "@/Layouts/Home/CommunitySection";
import Header from "@/Layouts/Home/Header";
import Space from "@/Layouts/Home/Space";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <Header></Header>
        <Space></Space>
        <CommunitySection></CommunitySection>
        <Ask></Ask>
      </div>
    </main>
  );
}
