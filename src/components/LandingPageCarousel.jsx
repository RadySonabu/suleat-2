import React from 'react'
import Container from './Container'

function LandingPageCarousel() {
  return (
    <Container>

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/03/02/14/69/240_F_302146972_SPRUQTLzLDQ5QRAVvcpXMlpUPswZD9uV.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://t3.ftcdn.net/jpg/03/02/38/10/240_F_302381043_dvcYul7B7Rwbp4ZDido5dFbEGm0nqZRK.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/03/02/38/09/240_F_302380915_kZpakkhJX9YL23awpN9JznHksS65bIfC.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/03/02/14/71/240_F_302147132_0RJYT5Cfp2VTEV12ZTqxggLbrM2pcLuS.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </Container>
  )
}

export default LandingPageCarousel