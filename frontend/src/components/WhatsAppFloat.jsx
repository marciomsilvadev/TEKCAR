import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WA_DEFAULT } from '../data/site';

export const WhatsAppFloat = () => (
    <motion.a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-trigger"
        aria-label="Falar com a Teck Car pelo WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_30px_-8px_rgba(229,37,42,0.6)] transition-colors hover:bg-brand-dark"
    >
        <MessageCircle size={21} />
    </motion.a>
);
