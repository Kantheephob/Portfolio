"use client"
import { useEffect, useState } from "react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Placeholder - Left Side */}
          <div className="w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden bg-gray-300">
            <img
              src="/pgun.jpg"
              alt="My profile picture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content - Right Side */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              นักศึกษาวิทยาการคอมพิวเตอร์ ผู้มีความสนใจใน AI และอยากทำงานในต่างประเทศ มีประสบการณ์ในการเข้าร่วมการแข่งขันทางด้านวิชาการหลายๆงาน เช่น การแข่งขันการเขียนโค้ดระดับประเทศ ICPC การแข่งขันงาน Ideathorn เข้าร่วมงานแข่งขัน Mitr Phol AI hackathon ปัจจุบันกำลังทำโปรเจคร่วมกับอาจารย์ในหัวข้อ “ระบบค้นหาภาพด้วยข้อความ” ผมเป็นชายผู้มีความฝันที่อยากจะสร้าง AI vtuber เป็นของตัวเองให้ได้
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
