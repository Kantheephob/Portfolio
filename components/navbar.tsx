"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Diamond as Discord, Facebook, Instagram } from "lucide-react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null)

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experiences", id: "experiences" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kantheephob-klamcham-b16b39388",
      label: "LinkedIn",
      ariaLabel: "LinkedIn profile",
    },
    {
      icon: Github,
      href: "https://github.com/Kantheephob",
      label: "GitHub",
      ariaLabel: "GitHub profile",
    },
    {
      icon: Discord,
      href: "https://discordapp.com/users/962137014445166592",
      label: "Discord",
      ariaLabel: "Discord profile",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/kantheephob.klamcham.2025/?locale=th_TH",
      label: "Facebook",
      ariaLabel: "Facebook profile",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/kyogun/",
      label: "Instagram",
      ariaLabel: "Instagram profile",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 64 // h-16 = 64px, added navbar height offset
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      const elementHeight = element.clientHeight
      const windowHeight = window.innerHeight
      const offset = elementTop - (windowHeight - elementHeight) / 2 - navbarHeight

      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Social Icons - Left Side */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Resume Button - Right Side */}
          <Button
            onClick={handleResumeDownload}
            variant="outline"
            size="sm"
            className="hidden md:inline-flex bg-transparent"
          >
            Resume
          </Button>
        </div>
      </div>
    </nav>
  )
}
