import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MemberCard from "@/components/MemberCard";
import { members } from "@/data/members";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 font-share-tech bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple-dark/20 via-brand-dark to-brand-dark">
      <main className="flex flex-col gap-16 w-full max-w-7xl items-center z-10">
        <Hero />
        
        <section className="w-full px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-10 sm:w-20 bg-brand-green/50"></div>
            <h2 className="text-2xl md:text-3xl font-press-start text-brand-green mx-6 text-center shadow-brand-green drop-shadow-sm">
              &lt;MEMBERS /&gt;
            </h2>
            <div className="h-px w-10 sm:w-20 bg-brand-green/50"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 w-full">
            {members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
