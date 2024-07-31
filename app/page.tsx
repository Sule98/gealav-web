import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";


export default function Home() {
  return (
    
  <div> 
     <div className="bg-primary text-secondary p-4">
        Primary Background
      </div>
      <div className="bg-secondary text-text p-4">
        Secondary Background
      </div>
      <div className="bg-text text-primary p-4">
        Text Color
      </div>
  </div>
     
    
  );
}
