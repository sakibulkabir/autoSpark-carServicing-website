



function Homecom() {
  return (
    <div >
      <div className=''>
        <video autoPlay muted loop className='absolute w-full h-full object-cover' src="../../../public/videos/hero-background-tranquil.mp4"></video>

        <div class="absolute w-full h-full bg-black/50"></div>
      <div className='relative z-10 flex flex-col justify-center items-center h-180  '>
        <h1 className='text-white text-5xl font-bold text-center mt-10 animate-bounce'>Welcome to AutoSpark</h1>
        <p className='text-white text-center mt-5 text-3xl pb-10 animate-pulse '>Your trusted partner for quality automotive services.</p>
        
        <button className='border border-white text-white text-2xl px-12 py-2 rounded-full hover:text-yellow-400 cursor-pointer hover:border-yellow-500 '>Book Now</button>
        
      </div>
       
      </div>
      
    </div>
  )
}

export default Homecom