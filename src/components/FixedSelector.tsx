import LanguageSelector from '@/components/Language/LanguageSelector'

export default function FixedSelector() {
  return (
    <div className="w-[50px] p-2 rounded-tl-md rounded-bl-md bg-white/55 fixed top-5 right-0 backdrop-blur-sm">
      <LanguageSelector />
    </div>
  )
}
