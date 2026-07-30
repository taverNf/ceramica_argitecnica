import hero from '@/assets/images/hero_img.jpg'
import './Hero.css'

function Hero (){
  return(
    <main className="hero">
      <img src={hero} alt="" className="hero-item hero-img" />

      <section className="hero-item hero-title-section">
        <h1 className="hero-title">Os melhores materiais de construção <br/><span>da região.</span></h1>
      </section>
    </main>
  )
}

export default Hero