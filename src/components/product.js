import React, { useState } from 'react';

const tuotteet = {
  audi: {
    sedan: [
      { nimi: 'Audi A3', hinta: '35,000€' },
      { nimi: 'Audi A4', hinta: '45,000€' },
      { nimi: 'Audi A6', hinta: '55,000€' },
    ],
    farmari: [
      { nimi: 'Audi A3 Avant', hinta: '37,000€' },
      { nimi: 'Audi A4 Avant', hinta: '47,000€' },
      { nimi: 'Audi A6 Avant', hinta: '57,000€' },
    ],
  },
  bmw: {
    sedan: [
      { nimi: 'BMW 3-sarja', hinta: '40,000€' },
      { nimi: 'BMW 5-sarja', hinta: '50,000€' },
      { nimi: 'BMW 7-sarja', hinta: '70,000€' },
    ],
    farmari: [
      { nimi: 'BMW 3-sarja Touring', hinta: '42,000€' },
      { nimi: 'BMW 5-sarja Touring', hinta: '52,000€' },
      { nimi: 'BMW 7-sarja Touring', hinta: '72,000€' },
    ],
  },
  mercedes: {
    sedan: [
      { nimi: 'Mercedes-Benz C-sarja', hinta: '38,000€' },
      { nimi: 'Mercedes-Benz E-sarja', hinta: '55,000€' },
      { nimi: 'Mercedes-Benz S-sarja', hinta: '80,000€' },
    ],
    farmari: [
      { nimi: 'Mercedes-Benz C-sarja Estate', hinta: '40,000€' },
      { nimi: 'Mercedes-Benz E-sarja Estate', hinta: '57,000€' },
      { nimi: 'Mercedes-Benz S-sarja Estate', hinta: '85,000€' },
    ],
  },
};

function App() {
  const [selectedTuoteryhma, setSelectedTuoteryhma] = useState('audi-sedan');

  const naytaTuoteryhma = (tuoteryhma) => {
    setSelectedTuoteryhma(tuoteryhma);
  };

  return (
    <div className="App">
      <div id="tuoteryhmat">
        <button onClick={() => naytaTuoteryhma('audi-sedan')}>Audi Sedan</button>
        <button onClick={() => naytaTuoteryhma('audi-farmari')}>Audi Farmari</button>
        <button onClick={() => naytaTuoteryhma('bmw-sedan')}>BMW Sedan</button>
        <button onClick={() => naytaTuoteryhma('bmw-farmari')}>BMW Farmari</button>
        <button onClick={() => naytaTuoteryhma('mercedes-sedan')}>Mercedes Sedan</button>
        <button onClick={() => naytaTuoteryhma('mercedes-farmari')}>Mercedes Farmari</button>
      </div>

      <div id="tuotteet">
        {tuotteet[selectedTuoteryhma].map((tuote, index) => (
          <div key={index} className="tuote">
            <p>
              <strong>{tuote.nimi}</strong>
            </p>
            <p>{tuote.hinta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;