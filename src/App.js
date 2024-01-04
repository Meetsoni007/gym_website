import { useEffect } from 'react';
import Aos from 'aos';
import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Hero from '../src/components/UI/Hero'
import Exercise from '../src/components/UI/Exercise'
import Start from '../src/components/UI/Start'
import Pricing from '../src/components/UI/Pricing';
import Testimonia from './components/UI/Testimonia';
import Footer from './components/UI/Footer';

function App() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <>
            <Header />
            <Hero />
            <Exercise />
            <Start />
            <Pricing />
            <Testimonia />
            <Footer />
        </>
    )
}
export default App;