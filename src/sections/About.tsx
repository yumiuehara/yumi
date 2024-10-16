import Image from 'next/image'
import { AiFillThunderbolt } from 'react-icons/ai'
import { FaFigma, FaGit, FaHtml5, FaJava, FaSass } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { IoLogoCss3, IoLogoReact, IoLogoVue } from 'react-icons/io5'
import { RiSvelteFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiKotlin } from 'react-icons/si'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import { JSXElement } from 'react-photo-album'

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center p-10 py-20 text-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        <Skills />
        <Bio />
        <Experience />
      </div>
    </section>
  )
}

type SkillTagProps = {
  text: string
  icon: JSXElement
}

function SkillTag({ text, icon }: SkillTagProps) {
  return (
    <div className="bg-slate-300 rounded text-center px-2 items-center flex justify-center min-h-[60px] gap-x-2 hover:scale-110 transition duration-300">
      {icon}
      <p className="text-sm">{text}</p>
    </div>
  )
}

function Skills() {
  return (
    <div className="flex flex-col items-center gap-y-4 px-10">
      <p className="font-bold text-xl">Competências</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-2">
        <SkillTag text="Vue" icon={<IoLogoVue />} />
        <SkillTag text="React" icon={<IoLogoReact />} />
        <SkillTag text="Svelte" icon={<RiSvelteFill />} />
        <SkillTag text="SvelteKit" icon={<RiSvelteFill />} />
        <SkillTag text="Typescript" icon={<TbBrandTypescript />} />
        <SkillTag text="Javascript" icon={<TbBrandJavascript />} />
        <SkillTag text="Java" icon={<FaJava />} />
        <SkillTag text="Kotlin" icon={<SiKotlin />} />
        <SkillTag text="ChakraUI" icon={<AiFillThunderbolt />} />
        <SkillTag text="TailwindCSS" icon={<RiTailwindCssFill />} />
        <SkillTag text="HTML" icon={<FaHtml5 />} />
        <SkillTag text="CSS" icon={<IoLogoCss3 />} />
        <SkillTag text="Sass" icon={<FaSass />} />
        <SkillTag text="MySQL" icon={<GrMysql />} />
        <SkillTag text="Git" icon={<FaGit />} />
        <SkillTag text="Figma" icon={<FaFigma />} />
      </div>
    </div>
  )
}

function Bio() {
  return (
    <div className="flex flex-col items-center gap-y-4 px-10">
      <Image
        src="/images/eu.webp"
        alt="a"
        width={0}
        height={0}
        className="w-[250px] h-auto"
      />
      <div className="font-bold">Yumi | 26 | Brazil</div>

      <div className="text-center">
        Formada em Ciência da Computação, possuo 4 anos de experiência no
        desenvolvimento e manutenção de aplicações web. Minha experiência
        abrange também o consumo e desenvolvimento de APIs e bancos de dados.
        Atualmente, busco novas experiências e oportunidades de aprendizado.
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="flex flex-col gap-y-20 px-10">
      <div className="flex flex-col gap-y-4">
        <span className="font-bold text-xl text-center">Experiência</span>

        <div className="flex flex-col text-sm gap-y-4">
          <div className="flex items-center gap-x-2">
            <Image
              src="/images/xp/simpli.png"
              alt="simpli logo"
              width={0}
              height={0}
              className="w-7 rounded"
            />
            <a
              className="font-semibold"
              href="https://github.com/simplitech"
              target="_blank"
            >
              Simpli
            </a>
          </div>

          <div>
            <div>
              <span>2022-2024 - </span>
              <strong>Analista de sistemas júnior</strong>
            </div>
            <ul className="list-disc list-inside px-2 break-words">
              <li>
                Desenvolvimento de sistemas web utilizando
                Vue/Svelte/React/Next.js/Javascript/Typescript
              </li>
              <li> Desenvolvimento de APIs utilizando Kotlin/Java</li>
              <li>Manipulação de banco de dados utilizando MySQL</li>
              <li>
                Integração de smart contracts da NEO blockchain com front-end
                utilizando Typescript
              </li>
            </ul>
          </div>

          <div>
            <div>
              <span>2020-2022</span> -{' '}
              <strong>Estagiária de desenvolvimento web</strong>
            </div>

            <ul className="list-disc list-inside px-2">
              <li>
                Desenvolvimento de sistemas web utilizando
                Vue/Javascript/Typescript
              </li>
              <li>Desenvolvimento de APIs utilizando Kotlin/Java</li>
              <li>Desenvolvimento Android utilizando Kotlin</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <span className="font-bold text-xl text-center">
          Formação acadêmica
        </span>

        <div className="text-sm">
          <span>2019-2022</span> - <strong>Ciência da Computação</strong>,
          Bacharelado, Pontifícia Universidade Católica de São Paulo
        </div>
      </div>
    </div>
  )
}
