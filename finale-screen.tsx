'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { RotateCcw, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { AsteriskMark, SparkleMark } from '../decor'
import { FireworksCanvas } from '../fireworks-canvas'
import { CtaButton, Eyebrow } from '../ui-kit'
import { RECIPIENT } from '@/lib/content'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function FinaleScreen({ onRestart }: { onRestart: () => void }) {
  const [celebrations, setCelebrations] = useState(0)

  return (
    <section className="relative flex flex-1 overflow-hidden bg-maroon">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(233,189,93,0.14),transparent_50%)]"
      />
      <FireworksCanvas trigger={celebrations} />

      <div className="relative grid w-full items-center gap-14 px-6 py-14 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-[126px] lg:py-16">
        <div>
          <motion.div {...rise(0.1)}>
            <Eyebrow tone="gold">The grand finale</Eyebrow>
          </motion.div>
          <motion.h1
            {...rise(0.2)}
            className="mt-8 font-serif text-[clamp(3.75rem,8.5vw,8rem)] font-normal leading-[0.95] text-cream"
          >
            Happy
            <br />
            Diwali,
          </motion.h1>
          <motion.p
            {...rise(0.32)}
            className="mt-3 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] italic leading-none text-gold"
          >
            {RECIPIENT}
          </motion.p>
          <motion.p {...rise(0.45)} className="mt-8 max-w-md text-lg text-cream/80">
            May your home glow, your heart feel light, and every day ahead sparkle a little more.
          </motion.p>
          <motion.div {...rise(0.6)} className="mt-10 flex flex-wrap items-center gap-4">
            <CtaButton
              variant="gold"
              onClick={() => setCelebrations((c) => c + 1)}
              icon={<Sparkles aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:rotate-12" />}
            >
              Light up the sky
            </CtaButton>
            <CtaButton
              variant="outline"
              onClick={onRestart}
              icon={<RotateCcw aria-hidden="true" className="size-4 transition-transform duration-500 group-hover:-rotate-180" />}
            >
              Begin again
            </CtaButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -5, y: 40 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="rotate-[1.5deg] border border-gold/60 p-3">
              <div className="-rotate-[2.5deg] bg-cream p-2.5 shadow-[0_30px_60px_-25px_rgba(20,4,8,0.7)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/diwali-finale.png"
                    alt="Rows of glowing clay diyas among marigold petals on maroon velvet"
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="flex items-baseline gap-4 px-3 pb-1 pt-3.5 font-serif text-xl text-maroon">
                  <span className="font-sans text-[11px] text-coral">05</span>Every little light, for you
                </p>
              </div>
            </div>
          </motion.div>
          <AsteriskMark className="absolute -right-4 -top-5 size-7 animate-twinkle text-gold-soft" />
          <SparkleMark className="absolute -left-6 bottom-[22%] size-6 animate-twinkle text-gold [animation-delay:1s]" />
        </motion.div>
      </div>

      <p
        aria-hidden="true"
        className="absolute bottom-7 right-5 hidden font-sans text-[10px] uppercase tracking-[0.3em] text-gold/70 [writing-mode:vertical-rl] md:block"
      >
        {`Shubh Deepavali · ${RECIPIENT}`}
      </p>
    </section>
  )
}
