import Header from "~/Components/header";
import Hero from "~/Components/hero";
import Teaser from "~/Components/teaser";
import Latest from "~/Components/latest";
export default function Index() {
  return (
    <div> 
      <Header />
      <main>
        <Hero />
        <Latest />
        <Teaser />
      

      </main>
      
      
    </div>
  );
}
