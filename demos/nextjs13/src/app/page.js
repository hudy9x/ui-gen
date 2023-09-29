import Image from "next/image";

{/*R_IMPORT_START*/}
          import BlogSection2 from '@/components/BlogSection2'
          import TeamSection2 from '@/components/TeamSection2'
          import ContactSection2 from '@/components/ContactSection2'
          {/*R_IMPORT_END*/}

export default function Home() {
  return <>

{/*R_CONTENT_START*/}
          <BlogSection2 />
          <TeamSection2 />
          <ContactSection2 />
          {/*R_CONTENT_END*/}
    
    </>;
}
