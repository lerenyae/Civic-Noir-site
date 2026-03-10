'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const quotes = [
  { src: '/quotes/act1-01.png', alt: 'Cold Read — Act I' },
  { src: '/quotes/act1-02.png', alt: 'Cold Read — Act I' },
  { src: '/quotes/act1-03.png', alt: 'Cold Read — Act I' },
  { src: '/quotes/act1-04.png', alt: 'Cold Read — Act I' },
  { src: '/quotes/act1-05.png', alt: 'Cold Read — Act I' },
  { src: '/quotes/act1-06.png', alt: 'Cold Read — Act I' },
  { src: '/quotes/act2-01.png', alt: 'Cold Read — Act II' },
  { src: '/quotes/act2-02.png', alt: 'Cold Read — Act II' },
  { src: '/quotes/act2-03.png', alt: 'Cold Read — Act II' },
  { src: '/quotes/act2-04.png', alt: 'Cold Read — Act II' },
  { src: '/quotes/act2-05.png', alt: 'Cold Read — Act II' },
  { src: '/quotes/act2-06.png', alt: 'Cold Read — Act II' },
  { src: '/quotes/act3-01.png', alt: 'Cold Read — Act III' },
  { src: '/quotes/act3-02.png', alt: 'Cold Read — Act III' },
  { src: '/quotes/act3-03.png', alt: 'Cold Read — Act III' },
  { src: '/quotes/act3-04.png', alt: 'Cold Read — Act III' },
  { src: '/quotes/act3-05.png', alt: 'Cold Read — Act III' },
  { src: '/quotes/act3-06.png', alt: 'Cold Read — Act III' },
  ]

export default function QuoteCarousel() {
    const [current, setCurrent] = useState(0)
    const [visible, setVisible] = useState(true)

  useEffect(() => {
        const interval = setInterval(() => {
                setVisible(false)
                setTimeout(() => {
                          setCurrent(prev => (prev + 1) % quotes.length)
                          setVisible(true)
                }, 700)
        }, 15000)
        return () => clearInterval(interval)
  }, [])

  const goTo = (i: number) => {
        if (i === current) return
        setVisible(false)
        setTimeout(() => {
                setCurrent(i)
                setVisible(true)
        }, 700)
  }

  return (
        <div className="relative">
              <div
                        style={{ opacity: visible ? 1 : 0, transition: 'opacity 700ms ease-in-out' }}
                        className="relative max-w-lg mx-auto"
                      >
                      <Image src={quotes[current].src} alt={quotes[current].alt} width={1080} height={1080} className="w-full" priority />
              </div>div>
              <div className="flex justify-center items-center gap-3 mt-8">
                {quotes.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} aria-label={`Quote ${i + 1}`}
                                  className="h-px transition-all duration-500 hover:opacity-100"
                                  style={{ width: i === current ? '2rem' : '0.5rem', opacity: i === current ? 1 : 0.3, backgroundColor: 'rgb(212 175 55 / 0.6)' }}
                                />
                  ))}
              </div>div>
        </div>div>
      )
}</div>
