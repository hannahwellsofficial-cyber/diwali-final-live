'use client'

import { motion } from 'motion/react'
import { InteractiveDiya } from '../interactive-diya'
import { CtaButton, Eyebrow } from '../ui-kit'
import { RECIPIENT } from '@/lib/content'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function SparkleScreen({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative flex flex-1 overflow-hidden bg-maroon">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_55%,rgba(233,189,93,0.12),transparent_45%)]"
      />
      <div className="relative grid w-full items-center gap-12 px-6 py-14 sm:px-12 lg:grid-cols-2 lg:px-[126px] lg:py-16">
        <div>
          <motion.div {...rise(0.1)}>
            <Eyebrow tone="gold">Make a little wish</Eyebrow>
          </motion.div>
          <motion.h1
            {...rise(0.2)}
            className="mt-8 font-serif text-[clamp(3.75rem,8.5vw,8rem)] font-normal leading-[0.95] text-cream"
          >
            A Little
            <br />
            Sparkle
          </motion.h1>
          <motion.p {...rise(0.35)} className="mt-6 max-w-md text-lg text-cream/80">
            Tap the diya and let a little light find its way to you.
          </motion.p>
          <motion.div {...rise(0.5)} className="mt-10">
            <CtaButton variant="gold" onClick={onNext}>
              Keep the sparkle
            </CtaButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <InteractiveDiya />
        </motion.div>
      </div>

      <p
        aria-hidden="true"
        className="absolute bottom-7 right-5 hidden font-sans text-[10px] uppercase tracking-[0.3em] text-gold/70 [writing-mode:vertical-rl] md:block"
      >
        {`A small sparkle · ${RECIPIENT}`}
      </p>
    </section>
  )
}
