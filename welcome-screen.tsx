'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { AsteriskMark, PaisleyMark, SparkleMark } from '../decor'
import { CtaButton, Eyebrow } from '../ui-kit'
import { RECIPIENT } from '@/lib/content'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <section className="grid flex-1 items-center gap-14 py-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:py-4">
      <div className="lg:pl-8">
        <motion.div {...rise(0.1)}>
          <Eyebrow>A little something, just for you</Eyebrow>
        </motion.div>
        <motion.h1
          {...rise(0.2)}
          className="mt-8 font-serif text-[clamp(3.75rem,9.2vw,8.5rem)] font-normal leading-[0.92] tracking-[-0.01em] text-maroon"
        >
          A Little
          <br />
          Diwali
          <br />
          Surprise
        </motion.h1>
        <motion.p {...rise(0.35)} className="mt-8 max-w-md text-lg text-muted">
          {`For ${RECIPIENT}, with a little extra sparkle this Diwali.`}
        </motion.p>
        <motion.p {...rise(0.45)} className="mt-10 text-[15px] text-muted">
          A little festive something for <strong className="font-semibold text-maroon">{RECIPIENT}</strong>
        </motion.p>
        <motion.div {...rise(0.55)} className="mt-10">
          <CtaButton onClick={onNext}>Come on in</CtaButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, rotate: 4, y: 40 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[880px] pb-8 lg:mr-0"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="-rotate-[1.5deg] border border-gold/70 bg-cream p-3 shadow-[0_30px_60px_-30px_rgba(116,50,61,0.35)] sm:p-3.5">
            <div className="rotate-[1.8deg] bg-[#fbf1e4] shadow-[0_18px_40px_-20px_rgba(116,50,61,0.4)]">
              <div className="relative aspect-[1.25/1] overflow-hidden">
                <Image
                  src="/images/diwali-hero.png"
                  alt="A lit clay diya beside a wax-sealed envelope, brass lotus lamps, marigolds and a maroon silk ribbon"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[78%_center]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#f5e7d3]/40 via-transparent to-transparent" />
              </div>
              <p className="flex items-baseline gap-4 px-5 py-4 font-serif text-xl text-maroon sm:text-[22px]">
                <span className="font-sans text-[11px] text-coral">01</span>A little light, made for you
              </p>
            </div>
          </div>
        </motion.div>

        <AsteriskMark className="absolute -top-4 right-[14%] size-7 animate-twinkle text-gold-soft" />
        <SparkleMark className="absolute bottom-[18%] -left-5 size-6 animate-twinkle text-gold-soft [animation-delay:1.2s]" />
        <PaisleyMark className="absolute bottom-0 left-[5%] text-sage" />
      </motion.div>
    </section>
  )
}
