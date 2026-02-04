'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(1)
  const hasStartedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true

            let current = 1
            const totalDuration = 2000
            const steps = numericValue - 1
            const interval = Math.max(totalDuration / steps, 50)

            timerRef.current = setInterval(() => {
              current += 1
              if (current >= numericValue) {
                setDisplayValue(numericValue)
                if (timerRef.current) {
                  clearInterval(timerRef.current)
                  timerRef.current = null
                }
              } else {
                setDisplayValue(current)
              }
            }, interval)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [numericValue])

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline justify-center tabular-nums ${className}`}
      style={{ minWidth: `${value.length + suffix.length}ch` }}
    >
      <span className="relative overflow-hidden inline-block" style={{ minWidth: `${value.length}ch` }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={displayValue}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="inline-block text-right"
            style={{ minWidth: `${value.length}ch` }}
          >
            {displayValue}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>{suffix}</span>
    </span>
  )
}
