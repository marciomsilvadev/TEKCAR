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
    componentDidCatch(error, errorInfo) {
        console.error("App ErrorBoundary caught:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0A0D12] text-white flex flex-col items-center justify-center p-6 text-center">
                    <h1 className="font-display text-3xl font-bold uppercase text-[#E5252A]">TekCar</h1>
                    <p className="mt-3 text-zinc-400">Ocorreu um problema ao carregar a página.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 rounded bg-[#E5252A] px-6 py-2.5 text-sm font-semibold text-white"
                    >
                        Recarregar
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    useEffect(() => {
        // Respeita preferência do usuário de movimento reduzido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.0,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
        });
        window.__lenis = lenis;

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className="grain relative min-h-screen bg-[#0A0D12] text-zinc-100 selection:bg-[#E5252A] selection:text-white">
                <Navbar />
                <main id="main-content">
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
