import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AboutPage from './pages/about'
import ProjectsPage from './pages/projects'
import ContactModal from './Components/ContactForm/ContactModal'
import './App.css'

function App() {

  return (
    <>
      <ContactModal />
      <Header />
      <AboutPage />
      <ProjectsPage />
      <Footer />
    </>
  )
}

export default App
