import { motion, useReducedMotion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, y = 20, className = '', testid }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            data-testid={testid}
            className={className}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: shouldReduceMotion ? 0.2 : 0.6,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export const Eyebrow = ({ children, className = '' }) => (
    <div
        className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400 ${className}`}
    >
        <span className="h-px w-6 bg-[#E5252A]" aria-hidden="true" />
        <span>{children}</span>
    </div>
);
