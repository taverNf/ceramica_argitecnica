import './App.css'
import Hero from './components/hero/Hero'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Hero />
      </main>
    </>
  )
}

export default App
