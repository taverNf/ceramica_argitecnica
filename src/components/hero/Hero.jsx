import hero from '@/assets/images/hero_img.jpg'
import './Hero.css'
import ArrowOutward from '@mui/icons-material/ArrowOutward'

function Hero (){
  return(
    <main className="hero">
      <main className="hero-content">
        <section className="hero-item hero-text-section">
          <h1 className="hero-title">Sua obra merece materiais de <span>confiança & qualidade</span></h1>
          <h3 className="hero-subtitle">Desde 1976 sendo a principal fornecedora de tijolos, lajes e canaletas da região de Itapetininga.</h3>

          <div className="actions-box">
            <button className="action-button">Fazer Orçamento <ArrowOutward /></button>
            <p className="action-text">Mais de 2.000 <br/> obras por ano</p>
          </div>
        </section>

        <img src={hero} alt="" className="hero-item hero-img" />
      </main>
    </main>
  )
}

export default Hero