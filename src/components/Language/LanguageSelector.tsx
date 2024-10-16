'use client'

import { SelectorItem } from './SelectorItem'

export default function LanguageSelector() {
  const currentLang = 'pt-br'

  return (
    <div className="flex flex-col items-center gap-y-4">
      <SelectorItem
        currentLang={currentLang}
        lang="pt-br"
        imagePath="/images/br.svg"
      />
      <SelectorItem
        currentLang={currentLang}
        lang="en-us"
        imagePath="/images/us.svg"
      />
    </div>
  )
}
