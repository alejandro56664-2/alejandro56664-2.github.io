import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Me llamo <Themed.a href="https://twitter.com/alejandro56664">Alejandro Morales Vásquez</Themed.a>
      {` `}
      <br />
      Estudié Ingeniería Electrónica, me interesa la arquitectura de software, el aprendizaje de máquina, el diseño de juegos y las novelas gráficas.
    </>
  )
}
