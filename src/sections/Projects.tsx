import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io'

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col px-10 py-20 text-black">
      <h2 className="text-2xl font-bold text-center mb-10">Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        <ProjectItem
          tag="new"
          title="Meu portifólio"
          description="Site com informações sobre mim."
          image="/images/projects/my-website.png"
          url="https://yumi.dev.br/"
          githubUrl="https://github.com/yumiuehara/yumi"
        />

        <ProjectItem
          tag="soon"
          title="FC Website"
          description="Site para minha Free Company do MMORPG Final Fantasy XIV."
          image="/images/projects/soon.webp"
        />

        <ProjectItem
          tag="soon"
          title="Tracker"
          description="Site para logar coisas que eu consumi."
          image="/images/projects/soon.webp"
        />

        <ProjectItem
          tag="soon"
          title="Receitas"
          description="Site para guardar receitas"
          image="/images/projects/soon.webp"
        />
      </div>
    </section>
  )
}

type TagType = 'new' | 'soon'

type TagProps = {
  type: TagType
}

type TagDetails = {
  className: string
  text: string
}

type TagDictionary = {
  [tagType: string]: TagDetails
}

function Tag({ type }: TagProps) {
  const tagFormat: TagDictionary = {
    new: {
      className: 'bg-yellow-500 animate-bounce',
      text: 'new!',
    },
    soon: {
      className: 'bg-teal-500',
      text: 'soon',
    },
  }

  return (
    <div
      className={classNames(
        'text-white p-2 rounded absolute -top-3 text-xs',
        tagFormat[type].className
      )}
    >
      {tagFormat[type].text}
    </div>
  )
}

type ProjectItemProps = {
  image: string
  tag?: TagType
  title: string
  description: string
  url?: string
  githubUrl?: string
}

function ProjectItem({
  image,
  tag,
  title,
  description,
  url,
  githubUrl,
}: ProjectItemProps) {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col gap-y-2 items-center relative"
    >
      <a href={url} target="_blank" className="flex flex-col items-center">
        <Image
          src={image}
          alt="a"
          width={0}
          height={0}
          className="w-[350px] h-auto mb-2"
        />

        <p className="font-bold">{title}</p>
      </a>
      {tag && <Tag type={tag} />}

      <p className="text-center text-sm max-w-[60%]">{description}</p>

      {githubUrl && (
        <Link href={githubUrl} target="_blank">
          <IoLogoGithub className="w-5 h-5" />
        </Link>
      )}
    </div>
  )
}
