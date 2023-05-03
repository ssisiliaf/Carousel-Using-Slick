import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from "react"

import Carouselone from './carousel-one.jsx'
import Carouseltwo from './carousel-two.jsx'
import Carouselthree from './carousel-three.jsx'
import Carouselfour from './carousel-four.jsx'
import Carouselfive from './carousel-five.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <p>Carousel One - Simple Carousel</p>
      <Carouselone />

      <p>Carousel Two - Auto Play</p>
      <Carouseltwo />

      <p>Carousel Three - </p>
      <Carouselthree />

      <p>Carousel Four - Ganti2 ukuran</p>
      <Carouselfour />

      <p>Carousel Five </p>
      <Carouselfive />
    </div>
  )
}
