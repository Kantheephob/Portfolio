"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Experience {
  id: number
  title: string
  description: string []
  image?: string
}

const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Tonkit Lab",
    image: "/tonkit-lab.jpg",
    description: [
      `หัวข้อโปรเจค คือ “ระบบค้นหาภาพด้วยข้อความ”`,
      `ได้ศึกษาการอ่าน paper และ การใช้งาน AI model ผ่าน library`,
      `ได้ศึกษาและทดลองการทำให้ระบบสามารถ on prodection ได้ โดยใช้ AI tool และ AWS cloud architecture`
    ],
  },
  {
    id: 2,
    title: "ICPC 2024",
    image: "/icpc.jpg",
    description: [
      `เข้าร่วมงานแข่งขันการเขียนโปรแกรมระดับประเทศ เป็นทีม ทีมละ 3 คน จัดแข่งที่จุฬาลงกรณ์มหาวิทยาลัย`,
      `เขียนโปรแกรมโดยใช้ภาษาโปรแกรมมิ่งที่สามารถแก้ปัญหาให้ตรงตามโจทย์และภายในเวลาที่กำหนด`,
      `ได้ระดับท้ายๆแต่ได้ประสบการณ์ที่สุดยอด`
    ], 
  },
  {
    id: 3,
    title: "Ideathorn 2024",
    image: "/ideathorn.jpg",
    description: [
      `การแข่งขันออกแบบ solution ในการแก้ปัญหาด้านการเกษตรโดยใช้อุปกรณ์ IOT คู่กับ AWS cloud architecture จัดแข่งที่มหาวิทยาลัยเกษตรศาสตร์ บางเขน การแข่งขันเป็นการร่วมมือกับอาจารย์นานาชาติ`,
      `ได้เรียนรู้การเก็บ requirement ออกแบบ solution และการทำงานร่วมกับรุ่นพี่รุ่นน้องในทีม`,
      `เข้ารอบสุดท้ายแต่ไม่ได้เป็นแชมป์`
    ],
  },
  {
    id: 4,
    title: "Mitr Phol AI Hackathon 2024",
    image: "/mitr-phol.jpg",
    description: [
      `การแข่งขันที่มุ่งเน้นทางด้าน Data Science ในการสร้าง model ทำนายราคาน้ำตาล`,
      `ตกรอบแรกเพราะในตอนนั้นยังไม่มีความรู้ด้าน Data Science แต่มีความสนใจในด้าน AI`,
      `ได้เรียนรู้การใช้ Generative AI ในการช่วยในการเรียนรู้กระบวนการทาง Data Science ภายในระยะเวลาอันสั้น`
    ],
  },
]

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiencesData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === experiencesData.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentExperience = experiencesData[currentIndex]

  return (
    <section id="experiences" className="w-screen">
      <div
        className={`w-screen h-80 sm:h-96 md:h-screen lg:h-screen bg-blue-100 flex flex-col justify-between px-4 sm:px-8 py-8 md:py-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-black mb-6 md:mb-8">Experiences</h2>

        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full flex-1 px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Left Arrow */}
          <Button
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-100 text-black hover:text-gray-700 shadow-md hover:shadow-lg transition-all"
            aria-label="Previous experience"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>

          {/* Image Container */}
          <div className="flex-shrink-0 w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[30rem] lg:w-[32rem] lg:h-[38rem] rounded-lg shadow-md overflow-hidden">
            {currentExperience.image ? (
              // 1. ถ้ามีรูปภาพใน data
              <img
                src={currentExperience.image}
                alt={currentExperience.title}
                className="w-full h-full object-cover"
              />
            ) : (
              // 2. ถ้าไม่มีรูปภาพ (เป็น ? หรือ undefined)
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-base">
                experience pic
              </div>
            )}
          </div>

          {/* Title and Description */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              {currentExperience.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
              {currentExperience.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right Arrow */}
          <Button
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-100 text-black hover:text-gray-700 shadow-md hover:shadow-lg transition-all"
            aria-label="Next experience"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 pb-8 md:pb-12">
          {experiencesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-4 h-4 sm:w-5 sm:h-5 bg-black"
                  : "w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-black hover:bg-gray-200"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
