export function OrderHero() {
  return (
    <section className="relative h-[500px] flex items-center bg-[#1a1464]">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${encodeURI('https://sjc.microlink.io/zyx0I6LZptqIcNZEl7Y9e6Gfxp3Z_Djj_EkGTCUlfcSA8mbVfr3RsRZ49wRFFHCIVbpQyeRYtXHwg5T3HEFOpQ.jpeg')})`,
          }}
        >
          <div className="absolute inset-0 bg-[#1a1464]/70" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            COMMITTED TO BUILDING
          </h1>
          <p className="text-2xl md:text-3xl font-semibold">
            AN EFFICIENT & CONSUMER FRIENDLY LPG ECO-SYSTEM
          </p>
        </div>
      </div>
    </section>
  )
}

