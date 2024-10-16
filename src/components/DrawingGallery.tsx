'use client'

import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/masonry.css'

const photos = [
  { src: '/images/drawings/leizen.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/claire.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/rumi.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/nyah_fox.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/nyah.webp', width: 500, height: 0, alt: '' },
  {
    src: '/images/drawings/nyah_blackhair.webp',
    width: 500,
    height: 0,
    alt: '',
  },
  { src: '/images/drawings/namazus.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/klaus.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/ana.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/arsipa.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/devilman.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/jumin.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/kabane.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/mob.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/peipei.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/ram.webp', width: 500, height: 0, alt: '' },

  { src: '/images/drawings/tracer.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/ash.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/garma.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/hanma.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/kamille.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/largatixa.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/mario.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/satoru.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/talius.webp', width: 500, height: 0, alt: '' },
  { src: '/images/drawings/seven.webp', width: 500, height: 0, alt: '   ' },
]

export default function DrawingGallery() {
  return <MasonryPhotoAlbum photos={photos} padding={10} />
}
