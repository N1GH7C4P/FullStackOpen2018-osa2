import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({kurssit}) => {
  /*const Tehtavia = () => kurssit.osat.reduce(function(sum, tehtava){
  return sum + tehtava.tehtavia
  }, 0)*/
  return (
      kurssit.map((kurssit, index) => 
      <div key={index}>
      <h1>{kurssit.nimi}</h1>
        <ul>
          {kurssit.osat.map(kurssi => <Kurssi key = {kurssi.id} kurssi={kurssi}/>)}
        </ul>
      </div>
    )
  )
}

export default App