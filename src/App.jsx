import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Solioution from './Pages/Solioution/Solioution'
import Choose from './Pages/Choose/Choose'
import Work from './Works/Works'
import Review from './Reviews/Review'
import Price from './Pages/Price/Price'
import Booking from './Pages/Booking/Booking'
import Service from './Pages/Services/Service'
import Blog from './Pages/Blog/Blog'
import Footer from './Pages/Footer/Footer'



function App() {
  return (
    <div>
      <Home/>
     
      <Solioution/>
      <Choose/>
      <Work/>
      <Review/>
      <Price/>
      <Booking/>
      <Service/>
      <Blog/>
      <Footer/>
     
    </div>
  )
}

export default App