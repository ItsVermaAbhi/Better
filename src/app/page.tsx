import Footer from "@/components/Footer";
import HeroPage from "@/components/HeroPage";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className=" m-0 p-0 px[5%] bg-[#00473]" >
   
   <div className="z-40 fixed w-[100vw]"><Navbar></Navbar></div>
     <div className="z-[-1]">
     
     <HeroPage/>
     </div>
    <div className="bg-white flex flex-col gap-3">
      <Landing/>
      <Services/>
      <Footer></Footer>
    </div>
    </div>
  );
}
