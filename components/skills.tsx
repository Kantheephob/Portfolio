"use client"

import { useState } from "react"

interface Skill {
  name: string
  icon: string
  proficiency: number
}

const skillsData: Skill[] = [
  { name: "HTML", icon: "html-1.svg", proficiency: 60 },
  { name: "CSS", icon: "css-3.svg", proficiency: 30 },
  { name: "JavaScript", icon: "javascript-1.svg", proficiency: 25 },
  { name: "TypeScript", icon: "typescript-2.svg", proficiency: 27 },
  { name: "C", icon: "c-1.svg", proficiency: 65 },
  { name: "C++", icon: "c.svg", proficiency: 65 },
  { name: "Java", icon: "java-4.svg", proficiency: 52 },
  { name: "Python", icon: "python-5.svg", proficiency: 70 },
  { name: "Next.js", icon: "next-js.svg", proficiency: 30 },
  { name: "Tailwind CSS", icon: "tailwind-css-2.svg", proficiency: 33 },
  { name: "scikit-learn", icon: "scikit-learn.svg", proficiency: 68 },
  { name: "PyTorch", icon: "PyTorch.svg", proficiency: 69 },
  { name: "Hugging Face", icon: "hf-logo.svg", proficiency: 66 },
  { name: "FAISS", icon: "meta-color.svg", proficiency: 64 },
  { name: "Vercel", icon: "vercel-icon-svgrepo-com.svg", proficiency: 42 },
  { name: "v0", icon: "v0-1.svg", proficiency: 60 },
  { name: "ChatGPT", icon: "chatgpt-6.svg", proficiency: 88 },
  { name: "Gemini", icon: "gemini-ai.svg", proficiency: 88 },
  { name: "Git", icon: "git-icon.svg", proficiency: 75 },
  { name: "AWS", icon: "aws-2.svg", proficiency: 50 },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">Skills</h1>
        <p className="text-center text-lg md:text-xl text-gray-600 mb-16">hover to see current proficiency</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-4"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:scale-110">
                <img
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  className="w-12 h-12 md:w-14 md:h-14 transition-opacity duration-300 object-contain"
                />

                {/* Proficiency Overlay on Hover */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-75 flex items-center justify-center animate-in fade-in duration-200">
                    <div className="text-white text-center">
                      <div className="text-2xl md:text-3xl font-bold">{skill.proficiency}%</div>
                      <div className="text-xs md:text-sm text-gray-200">Proficiency</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Skill Name */}
              <p className="text-center text-sm md:text-base font-medium text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
