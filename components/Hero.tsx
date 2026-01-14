export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-8 text-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-green rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/logo.png" 
          alt="IMRNES Logo" 
          className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_15px_rgba(50,205,50,0.5)]"
        />
      </div>
      
      <div className="space-y-4 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-press-start text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-purple drop-shadow-sm leading-tight py-2">
          IMRNES
        </h1>
        <p className="text-xl md:text-2xl font-share-tech text-brand-green tracking-widest uppercase">
          Ingin Menjadi Root Namun Enggan Sudo
        </p>
        <div className="h-1 w-32 bg-brand-purple mx-auto rounded-full mt-8"></div>
      </div>
    </div>
  );
}
