import React from 'react';
import TopMenuContainer from './components/topMenu/TopMenuContainer';
import Hero from './components/hero/Hero';
import './app.scss';
import Intro from './components/introduction/Intro';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TopMenuContainer />
      </div>
      <main>
        <div className="container">
          <Hero/>
          <Intro />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
