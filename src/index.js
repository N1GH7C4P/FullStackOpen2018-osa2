import React from 'react'
import ReactDOM from 'react-dom'

const kurssit = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }
]

const Kurssi = ({ kurssi }) => {
  return (
    <li>{kurssi.nimi} {kurssi.tehtavia}</li>
  )
}

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

ReactDOM.render(
  <App kurssit={kurssit} />,
  document.getElementById('root')
)