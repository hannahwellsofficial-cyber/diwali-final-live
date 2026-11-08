'use client'

import { motion } from 'motion/react'
import { AsteriskMark, FlowerMark, SparkleMark } from '../decor'
import { CtaButton, Eyebrow } from '../ui-kit'
import { WISHES } from '@/lib/content'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function WishesScreen({ onNext }: { onNext: () => void }) {
  return (
    <section className="grid flex-1 items-center gap-12 py-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-4">
      <div className="lg:pl-[105px]">
        <motion.div {...rise(0.1)}>
          <Eyebrow>A handful of warm wishes</Eyebrow>
        </motion.div>
        <motion.h1
          {...rise(0.2)}
          className="mt-8 font-serif text-[clamp(3.75rem,7.6vw,7.5rem)] font-normal leading-[0.95] text-maroon"
        >
          Little
          <br />
          Wishes
        </motion.h1>
        <motion.p {...rise(0.35)} className="mt-10 max-w-md text-lg text-muted">
          A few good things, sent your way this Diwali.
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          aria-hidden="true"
          className="absolute -top-16 right-[-1%] hidden text-gold-soft sm:block"
          initial={{ opacity: 0, scale: 0.5, rotate: -40 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            scale: { duration: 0.8, delay: 0.6 },
            rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <FlowerMark className="size-[72px]" />
        </motion.div>

        <ol>
          {WISHES.map((wish, i) => (
            <motion.li
              key={wish}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-6 border-b border-line py-8 sm:gap-12"
            >
              <span className="pt-2 font-sans text-xs tracking-widest text-coral">{String(i + 1).padStart(2, '0')}</span>
              <p className="flex-1 font-serif text-[clamp(1.6rem,2.6vw,2.15rem)] leading-snug text-maroon transition-transform duration-500 group-hover:translate-x-1">
                {wish}
              </p>
              <AsteriskMark className="mt-3 size-5 shrink-0 text-gold transition-transform duration-700 group-hover:rotate-180 group-hover:scale-125" />
            </motion.li>
          ))}
        </ol>

        <motion.div
          {...rise(0.95)}
          className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <p className="flex items-center gap-2 font-serif text-xl text-muted">
            Sent with a little sparkle <SparkleMark className="size-4 text-coral" />
          </p>
          <CtaButton serif onClick={onNext}>
            To the grand finale
          </CtaButton>
        </motion.div>
      </div>
    </section>
  )
}
