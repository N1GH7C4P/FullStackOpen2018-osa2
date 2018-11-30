import React from 'react'
import ReactDOM from 'react-dom'

const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
  }

const App = (props) => {
  const { kurssi } = props;
  const Sisalto = () => kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi}</li>)
  const Otsikko = () => <h1>{kurssi.nimi}</h1> 

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
  <App kurssi={kurssi} />,
  document.getElementById('root')
)