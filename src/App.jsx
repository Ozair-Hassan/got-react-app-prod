import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import BackgroundImage from './components/ui/BackgroundImage'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      // Returns an array when no query param but returns an object when query param present
      // Also this should be in a try-catch block because it will throw an error if the id (query param) does not exist in their database. Discuss this with me in person.

      // const result = axios(`https://thronesapi.com/api/v2/Characters/${query}`)

      let result
      try {
        result = await axios(`https://thronesapi.com/api/v2/Characters/`)
      } catch (error) {
        // preferably create a toast which says invalid search
        // result = await axios(`https://thronesapi.com/api/v2/Characters`)
        console.log(error)
      }

      // commented out these to prevent the console from being flooded and becoming harder to debug
      // console.log(query)
      // console.log(result.data)

      setItems(result.data)
      setFilteredResults(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  const handleSearchChange = (e) => {
    // setSearchText(e.target.value)
    console.log(e)
    console.log(items)
    let tempHoldingArray = []
    items.map((innerObj) => {
      if (
        innerObj.fullName.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        tempHoldingArray.push(innerObj)
      }
    })
    console.log(tempHoldingArray)
    setFilteredResults(tempHoldingArray)
  }

  return (
    <>
      <div className="container">
        <Header />
        <Search
          getQuery={(q) => setQuery(q)}
          searchText={searchText}
          handleChange={handleSearchChange}
        />
        <CharacterGrid
          isLoading={isLoading}
          // items={items}
          items={filteredResults}
        />
        <BackgroundImage />
      </div>
    </>
  )
}

export default App
