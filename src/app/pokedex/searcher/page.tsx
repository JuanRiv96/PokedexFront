import type { Metadata } from 'next'
import { Searcher } from "@/components";
import NextImage from "next/image";
import title from "../../../../public/SearcherTitle.png";

export const metadata: Metadata = {
  title: 'Pokemon Searcher',
  description: 'Created by Juan',
}
const SearCher = () => {
 
  return (
    <div className="flex flex-col items-center">
      <NextImage
        src={title}
        alt="Not Found"
        width={800}
        height={500}
        className="px-7 pb-3 pt-9 md:px-0"
      />
      <Searcher/>
    </div>
    
  )
};

export default SearCher;
