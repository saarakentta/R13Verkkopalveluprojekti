import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

// Määritellään hintasuodattimen ala- ja ylärajat, välivaihtoehto on ala- ja ylärajan väli
const lowPrice = 20000 // Hinta suodattimen alin hinta = Alle 20 000 €
const highPrice = 50000 // Hinta suodattimen suurin hinta = Yli 50 000 €

const Filters = ({ onFilterChange, onClearFilters }) => {
  const [filterOptions, setFilterOptions] = useState({
    merkki: [],
    korimalli: [],
    vari: [],
    kayttovoima: [],
    hinta: [`Alle ${lowPrice} €`, `${lowPrice}-${highPrice} €`, `Yli ${highPrice} €`],
  })

  const [localFilters, setLocalFilters] = useState({
    merkki: '',
    korimalli: '',
    vari: '',
    kayttovoima: '',
    hinta: '',
  })

  useEffect(() => {
    const getFilterOptions = async (filterType) => {
      try {
        const response = await axios.get(`http://localhost:3001/filter-options/${filterType}`);
        const options = response.data || []
        setFilterOptions((prevOptions) => ({ ...prevOptions, [filterType]: Array.isArray(options) ? options : [options] }))
      } catch (error) {
        // console.error(error)
      }
    };

    getFilterOptions('merkki')
    getFilterOptions('korimalli')
    getFilterOptions('vari')
    getFilterOptions('kayttovoima')
  }, []);

  const handleFilterChange = (filterType, selectedValue) => {
    const updatedFilters = { ...localFilters, [filterType]: selectedValue }
    setLocalFilters(updatedFilters)

    let queryValue = ''

    if (filterType === 'hinta') {
      if (selectedValue.includes('Yli')) {
        queryValue = `Yli ${highPrice}`
      } else if (selectedValue.includes('Alle')) {
        queryValue = `Alle ${lowPrice}`
      } else {
        const rangeValues = selectedValue.split('-').map(val => parseFloat(val.replace(/[^\d.]/g, '')))
        queryValue = rangeValues.length === 1 ? `Yli ${rangeValues[0]}` : `${rangeValues[0]}-${rangeValues[1]}`
      }
    } else {
      queryValue = selectedValue
    }

    onFilterChange(filterType, queryValue)
  };

  const clearAllFilters = () => {
    setLocalFilters({
      merkki: '',
      korimalli: '',
      vari: '',
      kayttovoima: '',
      hinta: '',
    });

    if (typeof onClearFilters === 'function') {
      onClearFilters()
    }
  }

  return (
    <div>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="custom-dropdown-toggle">
          Merkki
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('merkki', '')}>
            Poista suodatin
          </Dropdown.Item>
          {filterOptions.merkki.map((merkki, index) => (
            <Dropdown.Item key={index} onClick={() => handleFilterChange('merkki', merkki)}>
              {merkki}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="custom-dropdown-toggle">
          Korimalli
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('korimalli', '')}>
            Poista suodatin
          </Dropdown.Item>
          {filterOptions.korimalli.map((korimalli, index) => (
            <Dropdown.Item key={index} onClick={() => handleFilterChange('korimalli', korimalli)}>
              {korimalli}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="custom-dropdown-toggle">
          Väri
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('vari', '')}>
            Poista suodatin
          </Dropdown.Item>
          {filterOptions.vari.map((vari, index) => (
            <Dropdown.Item key={index} onClick={() => handleFilterChange('vari', vari)}>
              {vari}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="custom-dropdown-toggle">
          Käyttövoima
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('kayttovoima', '')}>
            Poista suodatin
          </Dropdown.Item>
          {filterOptions.kayttovoima.map((kayttovoima, index) => (
            <Dropdown.Item key={index} onClick={() => handleFilterChange('kayttovoima', kayttovoima)}>
              {kayttovoima}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="custom-dropdown-toggle">
          Hinta
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('hinta', '')}>
            Poista suodatin
          </Dropdown.Item>
          {filterOptions.hinta.map((hintaOption, index) => (
            <Dropdown.Item key={index} onClick={() => handleFilterChange('hinta', hintaOption)}>
              {hintaOption}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Button className='clear-filters-button' variant="secondary" onClick={clearAllFilters}>
        Tyhjennä kaikki suodattimet
      </Button>
    </div>
  );
};

export default Filters