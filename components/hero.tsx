"use client"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Welcome to P'Gun's Portfolio.</h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              สวัสดีครับผมพี่กันต์ กันต์ธีภพ กล่ำฉ่ำ ยินดีที่ได้รู้จักครับ
            </p>
          </div>

          {/* Image Placeholder - Right Side */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square rounded-lg overflow-hidden">
            <img
              src="/pgun1.png"
              alt="P'Gun"
              className="w-full h-full object-contain"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
