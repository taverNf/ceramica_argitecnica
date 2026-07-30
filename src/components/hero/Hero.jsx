import hero from '@/assets/images/hero_img.jpg'
import './Hero.css'

function Hero (){
  return(
    <main className="hero">
      <img src={hero} alt="" className="hero-item hero-img" />

      <h1 classname="hero-item hero-title">As melhores peças de cerâmica da região.</h1>
    </main>
  )
}

export default Hero