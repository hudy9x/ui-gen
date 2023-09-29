import Image from "next/image";

{/*R_IMPORT_START*/}
          import BlogSection1 from '@/components/BlogSection1'
          import BlogSection2 from '@/components/BlogSection2'
          {/*R_IMPORT_END*/}

export default function Home() {
  return <>

{/*R_CONTENT_START*/}
          <BlogSection1 />
          <BlogSection2 />
          {/*R_CONTENT_END*/}
    
    </>;
}
