import { Github, Globe, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export interface Member {
  name: string;
  github: string;
  bio?: string;
  personal_website?: string;
  contact?: string; // e.g. Email
  optional_contact?: string; // e.g. Discord/Twitter
  avatar_url?: string;
}

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="border-2 border-brand-purple p-6 rounded-lg bg-black/50 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all hover:-translate-y-1 duration-300 flex flex-col items-center gap-4 group relative overflow-hidden backdrop-blur-sm">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-green"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-green"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-green"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-green"></div>

      {/* Avatar */}
      <div className="w-24 h-24 rounded-full border-2 border-brand-green overflow-hidden bg-brand-purple-dark flex items-center justify-center shadow-lg">
        {member.avatar_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-press-start text-brand-light">{member.name[0]}</span>
        )}
      </div>

      {/* Info */}
      <div className="text-center w-full z-10">
        <h3 className="text-lg font-bold font-press-start text-brand-light truncate drop-shadow-md">{member.name}</h3>
        {member.bio && (
         <div className="relative"> 
  <p className="text-sm font-share-tech text-brand-light/70 mt-2 italic max-w-[200px] mx-auto leading-relaxed whitespace-normal break-words">
    &quot;{member.bio}&quot;
  </p>
</div> 
         
        )}
        
        <div className="flex justify-center gap-6 mt-4">
          <Link href={member.github} target="_blank" className="text-brand-purple hover:text-brand-green transition-colors hover:scale-110 transform duration-200" title="GitHub">
            <Github size={24} />
          </Link>
          
          {member.personal_website && (
            <Link href={member.personal_website} target="_blank" className="text-brand-purple hover:text-brand-green transition-colors hover:scale-110 transform duration-200" title="Website">
              <Globe size={24} />
            </Link>
          )}

          {member.contact && (
             <Link href={`mailto:${member.contact}`} className="text-brand-purple hover:text-brand-green transition-colors hover:scale-110 transform duration-200" title="Contact">
               <Mail size={24} />
             </Link>
          )}

          {member.optional_contact && (
             <div className="text-brand-purple hover:text-brand-green transition-colors cursor-help hover:scale-110 transform duration-200" title={`Optional: ${member.optional_contact}`}>
               <MessageSquare size={24} />
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

