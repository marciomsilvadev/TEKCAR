import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WA_DEFAULT } from '../data/site';

export const WhatsAppFloat = () => {
    const [tooltipOpen, setTooltipOpen] = useState(true);

    return (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
            {/* Tooltip Discreto "Online agora em Porto Alegre" */}
            <AnimatePresence>
                {tooltipOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: 1.8, duration: 0.4 }}
                        className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0D12]/95 px-3.5 py-1.5 text-xs text-zinc-300 shadow-xl backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="font-mono text-[11px]">Online em Porto Alegre</span>
                        <button
                            type="button"
                            onClick={() => setTooltipOpen(false)}
                            className="ml-1 text-zinc-500 hover:text-zinc-300 p-0.5"
                            aria-label="Fechar aviso"
                        >
                            <X size={12} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Botão Flutuante do WhatsApp */}
            <motion.a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="floating-whatsapp-trigger"
                aria-label="Falar com a TekCar pelo WhatsApp"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-13 w-13 p-3.5 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#20ba5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
                <MessageCircle size={24} aria-hidden="true" />
            </motion.a>
        </div>
    );
};
