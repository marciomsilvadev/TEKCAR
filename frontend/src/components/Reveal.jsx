import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, y = 28, className = '', testid }) => (
    <motion.div
        data-testid={testid}
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export const Eyebrow = ({ children, className = '' }) => (
    <span
        className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500 ${className}`}
    >
        <span className="h-px w-7 bg-brand" />
        {children}
    </span>
);
