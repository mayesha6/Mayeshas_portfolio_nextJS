import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"]
    }
  })
  const blogs = await res.json()
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl mt-30">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-5 py-10 container mx-auto">
        {blogs.data.data.slice(0,3).map((blog : IPost)=>{
          return(
            <BlogCard key={blog.id} post={blog}/>
          )
        })}
      </div>
      
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  );
}
