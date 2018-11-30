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


const App = (props) => {
  const { kurssit } = props;
  const Sisalto = () => kurssit.map((kurssit, index) => 
    <div key={index}>
    <h1>{kurssit.nimi}</h1>
      <ul>
        {kurssit.osat.map((osa) =>
          <li key = {osa.id}>{osa.nimi} {osa.tehtavia}</li>)}
      </ul>
    </div>
  )
  const Otsikko = () => <h1>{kurssit.nimi}</h1>
  /*const Tehtavia = () => kurssit.osat.reduce(function(sum, tehtava){
  return sum + tehtava.tehtavia
  }, 0)*/
  return (
    <div>
      <ul>
        {Otsikko()}
        {Sisalto()}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App kurssit={kurssit} />,
  document.getElementById('root')
)