import { Linkedin, Github, Diamond as Discord, Facebook, Instagram } from "lucide-react"

export default function Footer() {
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

  return (
    <footer className="w-full bg-black text-white py-12 md:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Address: 119/232 ซอย สรงประภา 22 แขวงสีกัน ดอนเมือง กรุงเทพมหานคร 10210</p>
              </div>
              <div>
                <p className="font-semibold">Tell: 065-750-9989</p>
              </div>
              <div>
                <p className="font-semibold">Email: kantheephob.kla@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.ariaLabel}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
