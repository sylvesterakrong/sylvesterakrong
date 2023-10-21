import TechStack from "./components/TechStack/page"
import ProjectsDone from "./components/ProjectsDone/page"
import Gallery from "./components/Gallery/page"
import Hero from "./components/Hero/page"

export default function Home() {
  return (
    <main className="px-10 min-h-screen">
      <Hero/>
      <TechStack/>
      <ProjectsDone/>
      <Gallery/>
    </main>
  )
}
