'use client'

import { motion } from 'motion/react'
import { AnimatedEnvelope } from '../animated-envelope'
import { PaisleyMark } from '../decor'
import { CtaButton, Eyebrow } from '../ui-kit'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function LetterScreen({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.05fr_1fr] lg:py-4">
      <div className="lg:pl-[110px]">
        <motion.div {...rise(0.1)}>
          <Eyebrow>A note tucked inside</Eyebrow>
        </motion.div>
        <motion.h1
          {...rise(0.2)}
          className="mt-8 font-serif text-[clamp(3.75rem,7.6vw,7.5rem)] font-normal leading-[0.95] text-maroon"
        >
          Just For You
        </motion.h1>
        <motion.p {...rise(0.35)} className="mt-6 max-w-md text-lg text-muted">
          A little envelope, with a little space for your words.
        </motion.p>
        <motion.div {...rise(0.5)} className="mt-10">
          <CtaButton onClick={onNext}>A few more wishes</CtaButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:pr-[6%]"
      >
        <AnimatedEnvelope />
      </motion.div>

      <PaisleyMark className="absolute bottom-6 right-0 hidden text-sage lg:block" />
    </section>
  )
}
