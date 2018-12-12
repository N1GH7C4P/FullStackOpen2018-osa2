import React from 'react'

const Kurssi = ({ kurssi }) => {
  return (
    <li>{kurssi.nimi} {kurssi.tehtavia}</li>
  )
}

export default Kurssi
