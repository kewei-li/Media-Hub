'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(1)
  const [hasStarted, setHasStarted] = useState(false)

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10)

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      let current = 1

      // Calculate interval to make animation ~2 seconds total
      const totalDuration = 2000
      const interval = totalDuration / (numericValue - 1)

      const timer = setInterval(() => {
        current += 1
        if (current >= numericValue) {
          setDisplayValue(numericValue)
          clearInterval(timer)
        } else {
          setDisplayValue(current)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView, numericValue, hasStarted])

  // Format display based on suffix type
  const formatDisplay = (num: number) => {
    return num.toString()
  }

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
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="inline-block text-right"
            style={{ minWidth: `${value.length}ch` }}
          >
            {formatDisplay(displayValue)}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>{suffix}</span>
    </span>
  )
}
