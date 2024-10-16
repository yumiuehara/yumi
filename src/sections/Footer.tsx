import Link from 'next/link'
import { GoLinkExternal } from 'react-icons/go'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-800 text-white flex flex-col justify-center items-center min-h-[100px] gap-y-2"
    >
      <div className="flex items-center justify-center gap-x-4">
        <Link href={'https://www.linkedin.com/in/yumiuehara/'} target="_blank">
          <IoLogoLinkedin className="w-8 h-8" />
        </Link>
        <Link href={'https://github.com/yumiuehara'} target="_blank">
          <IoLogoGithub className="w-8 h-8" />
        </Link>
        <Link href={'mailto:carolineyuehara@gmail.com'} target="_blank">
          <MdEmail className="w-8 h-8" />
        </Link>
      </div>

      <a
        className="text-xs flex gap-x-2 items-center"
        href="https://github.com/yumiuehara/yumi"
        target="_blank"
      >
        Made by Yumi with Next.js and TailwindCSS
        <GoLinkExternal />
      </a>
    </footer>
  )
}
