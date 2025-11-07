"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github } from "lucide-react" // <--- 1. อัปเดต import

interface Project {
  id: number
  title: string
  description: string[]
  image: string
  repoUrl?: string // <--- 2. อัปเดต interface
}

const projects: Project[] = [ // <--- 3. อัปเดต data
  {
    id: 1,
    title: "Notalgia Liftlog",
    description: [
      `ระบบค้นหาภาพด้วยข้อความ โดยใช้เทคโนโลยี CLIP จาก OpenAI`,
      `พัฒนาโดยใช้ภาษา Python ร่วมกับ Framework Flask สำหรับ Backend และ React สำหรับ Frontend`,
      `ปัจุบันอยู่ในระหว่างการพัฒนาและทดสอบระบบ`
    ],
    image: "/image-search.png",
    repoUrl: "https://github.com/Kantheephob/Nostalgia_Lifelog.git",
  },
  {
    id: 2,
    title: "Lottery Checker",
    description: [
      `โปรเจคต์ที่ทำให้คุณลุงต้องการระบบสำหรับตรวจสอบผลสลากกินแบ่งรัฐบาลโดยอัตโนมัติ`,
      `พัฒนาโดยใช้ pure HTML, CSS, และ JavaScript โดยไม่มีการใช้ Framework ใดๆ`,
      `ได้เรียนรู้ระบบหวยและความต้องการของผู้ใช้จากการสัมภาษณ์กับคุณลุง`
    ],
    image: "/lottery-checker.png",
    repoUrl: "https://github.com/Kantheephob/LotteyChecker.git",
  },
  {
    id: 3,
    title: "Trash Eater Game",
    description: [
      `เป็นเกมง่ายๆที่ผมทำให้พี่สาวไปส่งประกวดในงานของเด็กๆ`,
      `พัฒนาโดยใช้ game engine อย่าง GODOT`,
      `ได้เรียนรู้การออกแบบเกมและการทำงานร่วมกับผู้อื่นในการพัฒนาโปรเจคต์และการแก้ปัญหาไม่ว่าจะเป็นเครื่องมือที่ไม่คุ้นเคย โมเดล graphic ที่หาได้ยาก`
    ],
    image: "/trash-eater-game.png",
    repoUrl: "https://github.com/Kantheephob/Trash_Eater_Game.git",
  },
  {
    id: 4,
    title: "RAG",
    description: [
      `โปรเจคต์ที่ทำให้ผมได้เรียนรู้เกี่ยวกับ Retrieval-Augmented Generation (RAG) โดยใช้ LLMs ร่วมกับ vector database`,
      `เป็นโปรเจคต์ที่อาจารย์ในวิชา AI ให้มาเพราะผมอยากสร้าง AI Vtuber เป็นของตัวเอง`,
      `ได้เรียนรู้การใช้งาน LangChain, FAISS, Hugging Face และ Vercel ในการพัฒนาโปรเจคต์`
    ],
    image: "/rag.png",
    repoUrl: "https://github.com/Kantheephob/RAG-LLM.git",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="w-screen">
      <div
        className={`w-screen min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-12 md:py-20 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-black mb-4 md:mb-6">Projects</h2>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
          {/* Left Arrow */}
          <Button
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-100 text-black hover:text-gray-700 shadow-md hover:shadow-lg transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </Button>

          {/* Project Content */}
          <div className="flex-1 flex flex-col items-center text-center gap-6 md:gap-8">
            {/* Project Image */}
            <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-semibold shadow-md overflow-hidden">
              <img
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Title and Description */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                {currentProject.title}
              </h3>
            
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-black leading-relaxed text-left max-w-lg mx-auto">
                {currentProject.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              
              {/* vvv 4. เพิ่มปุ่มลิงก์ vvv */}
              {currentProject.repoUrl && (
                <div className="pt-4 md:pt-6">
                  <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100 hover:text-black">
                    <a
                      href={currentProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Repository
                    </a>
                  </Button>
                </div>
              )}
              {/* ^^^ สิ้นสุดส่วนที่เพิ่ม ^^^ */}

            </div>
          </div>

          {/* Right Arrow */}
          <Button
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-100 text-black hover:text-gray-700 shadow-md hover:shadow-lg transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </Button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-12 md:mt-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-4 h-4 sm:w-5 sm:h-5 bg-black"
                  : "w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-black hover:bg-gray-200"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}