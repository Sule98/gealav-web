import { ReactNode } from "react";
import Link from 'next/link'


const PageNotFound = ({
    title,
    description,
   
  }: {
    title: string;
    description: string;
   
  }) => (
    <div className="m-11 flex justify-center space-x-3 italic">
      <h1 className="text-primary font-bold text-8xl ">{title}</h1>
      
      <a href="" className="text-secondary text-4xl ">
        {description}
      </a>
      
     
    </div>
  );
 
export default  PageNotFound;