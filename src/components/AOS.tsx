"use client"

import { useLayoutEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AOSinit() {
  useLayoutEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return <></>
}