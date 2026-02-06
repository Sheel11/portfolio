import { useState } from 'react'
import Header from './Components/header/Header'
import './App.css'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
import Qualification from './Components/qualifications/Qualification'
import ContactForm from './Components/contact/ContactForm'
import Footer from './Components/footer/Footer'
import ScrollUp from './Components/scrollup/ScrollUp'
import PortfolioCard from './Components/work/Test'



const App = () => {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <PortfolioCard />
        {/* <Testimonials /> */}
        <ContactForm />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App
