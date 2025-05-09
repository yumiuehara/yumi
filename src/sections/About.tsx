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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
        <div className="flex flex-col gap-y-10">
          <Bio />
          <Skills />
        </div>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-2">
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
      <div className="font-bold">Yumi | São Paulo, Brasil</div>

      <div className="text-center">
        Desenvolvedora com 4 anos de experiência, especializada em front-end.
        Trabalhei em diversos projetos, com designs modernos e responsivos.
        Atualmente busco oportunidade de continuar crescendo profissionalmente,
        aprendendo tecnologias novas e aplicando minhas habilidades em projetos
        desafiadores.
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
              <span>2020-2024 - </span>
              <strong>Engenheira de Software</strong>
            </div>
            <ul className="list-disc list-inside pt-2 px-2 break-words">
              <li>
                Desenvolvimento e manutenção de aplicações utilizando Vue,
                Svelte, React, NextJS, AngularJS, Javascript, Typescript,
                TailwindCSS, ChakraUI, GraphQL, Java, Kotlin, MySQL
              </li>
            </ul>

            <div className="pl-2 pt-2">
              <span>Alguns projetos:</span>

              <div className="pt-2">
                <span className="font-bold">iTrack Brasil</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>
                    Plataforma de operações logísticas com rastreamento em tempo
                    real
                  </li>
                  <li>
                    Desenvolvimento de funcionalidades front-end com Vue e Vuex,
                    incluindo módulos de relatórios, processamento de dados
                    (CSV/XLSX) e gestão de imagens
                  </li>
                  <li>
                    Implementação e manutenção de APIs REST em Java e Kotlin,
                    realizando adaptações no banco de dados para novas
                    funcionalidades e criei testes unitários
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold">Abacashi</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>Plataforma de crowdfunding</li>
                  <li>
                    Desenvolvimento front-end utilizando React, GraphQL e
                    AngularJS
                  </li>
                  <li>Manutenção do back-end utilizando C# e Typescript</li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold">WOW Talents</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>
                    Plataforma de casting para pessoas da área do entretenimento
                  </li>
                  <li>
                    Implementação de novas features utilizando Vue e manutenção
                    do back-end utilizando Kotlin, como disparos de e-mails e
                    mensagens no WhatsApp, e do banco de dados
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold">nDapp</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>
                    Plataforma agregadora de informações da blockchain NEO,
                    participei desde a fase inicial como desenvolvedora
                    front-end
                  </li>
                  <li>Implementei disparo de e-mails e templates</li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold">COZ</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>
                    Participei do desenvolvimento das carteiras blockchain Neon
                    Wallet Mobile, utilizando React Native, e da Neon Wallet
                    Desktop, utilizando React, Typescript, Redux e Electron
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold">Apptite</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>Plataforma de delivery de comida</li>
                  <li>
                    Trabalhei com o desenvolvimento do front-end utilizando Vue,
                    com implementações de novas funcionalidades, como vitrine e
                    cardápios
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold">Linkd</span>
                <ul className="list-disc list-inside pt-2 px-2 break-words">
                  <li>Plataforma acadêmica sobre blockchain</li>
                  <li>
                    Responsável pelo desenvolvimento front-end utilizando
                    Svelte, SvelteKit e Vite desde a fase inicial do projeto
                  </li>
                  <li>
                    Implementação de um sistema de blog com Markdown e plugins
                    personalizados para formatação avançada (code snippets
                    multilíngue e glossário técnico)
                  </li>
                  <li>
                    Otimização de SEO e integração de smart contracts para
                    operações na blockchain NEO
                  </li>
                </ul>
              </div>
            </div>
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
