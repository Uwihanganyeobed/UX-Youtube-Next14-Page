import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import VideoGrid from "../../components/VideoGrid";


export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Sidebar />
      <main className="ml-20 pt-14 bg-gray-100 text-black">
        <VideoGrid />
      </main>
    </div>
  );
}
