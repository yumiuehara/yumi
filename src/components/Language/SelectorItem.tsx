import classNames from 'classnames'
import Image from 'next/image'

type SelectorItemProps = {
  currentLang: string
  lang: string
  imagePath: string
  onClick?: () => void
}

export async function SelectorItem({
  currentLang,
  lang,
  imagePath,
  onClick,
}: SelectorItemProps) {
  return (
    <button className="rounded">
      <Image
        src={imagePath}
        alt="ícone de bandeira"
        width={0}
        height={0}
        className={classNames('rounded w-5 h-auto', {
          grayscale: currentLang !== lang,
        })}
        onClick={onClick}
      />
    </button>
  )
}
