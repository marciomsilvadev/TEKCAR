import { Component, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Structure } from './components/Structure';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import './App.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return null;
        return this.props.children;
    }
}

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        window.__lenis = lenis;
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className="grain relative min-h-screen bg-ink">
                <Navbar />
                <main>
                    <Hero />
                    <Marquee />
                    <TrustBar />
                    <Services />
                    <Differentials />
                    <Structure />
                    <Process />
                    <Testimonials />
                    <Location />
                    <FinalCta />
                </main>
                <Footer />
                <WhatsAppFloat />
            </div>
        </ErrorBoundary>
    );
}

export default App;
