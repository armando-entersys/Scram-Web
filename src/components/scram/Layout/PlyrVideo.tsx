"use client"
import { useEffect } from 'react'

interface PlyrVideoProps {
  src: string
  poster: string
}

const PlyrVideo: React.FC<PlyrVideoProps> = ({ src, poster }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.rel = "stylesheet"
    link.href = "https://cdn.plyr.io/3.7.8/plyr.css"
    document.head.appendChild(link)

    script.onload = () => {
      const player = new (window as any).Plyr('#player')
    };

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div>
      <video id="player" playsInline controls poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default PlyrVideo
