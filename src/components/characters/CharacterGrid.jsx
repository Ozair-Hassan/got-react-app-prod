import { useEffect, useState } from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  const [navtiveItems, setNativeItems] = useState(null)

  useEffect(() => {
    if (Array.isArray(items)) {
      setNativeItems(items)
    } else {
      setNativeItems([items])
    }
  }, [items])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {navtiveItems.map((item) => (
            <CharacterItem
              key={item.id}
              item={item}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default CharacterGrid

{
  /* {Array.isArray(items) ? ( // checks if items is an array or not
        items.map(
          (
            itemCharacter // rendered ONLY when items prop is an arrayo
          ) => (
            <CharacterItem
              key={itemCharacter.id}
              item={itemCharacter}
            />
          )
        )
      ) : (
        <CharacterItem // rendered ONLY when items prop is NOT an array
          key={items.id}
          item={items}
        />
      )} */
}
