export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-brand-purple/30 bg-black/40 text-center font-share-tech text-brand-light/60">
      <p>&copy; {new Date().getFullYear()} IMRNES Team. All rights vibe coded.</p>
      <p className="text-sm mt-2">Built with Yahoodie Framework & Tailwind CSS</p>
    </footer>
  );
}
