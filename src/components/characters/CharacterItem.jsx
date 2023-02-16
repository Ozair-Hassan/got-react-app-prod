import { useEffect, useState } from 'react'
import './Border.css'
const CharacterItem = ({ item }) => {
  const setHouseBorder = (item) => {
    if (
      item.family === 'House Stark' ||
      item.family === 'Free Folk' ||
      item.family === 'Stark' ||
      item.firstName === 'Gilly' ||
      item.firstName === 'Brienne'
    ) {
      return 'ice-glow-border'
    } else if (
      item.family === 'House Lannister' ||
      item.family === 'House Lanister' ||
      item.family === 'Lannister' ||
      item.firstName === 'Tommen' ||
      item.lastName === 'Bronn' ||
      item.firstName === 'Shae'
    ) {
      return 'golden-glow-border'
    } else if (
      item.family === 'House Targaryen' ||
      item.family === 'Targaryan' ||
      item.lastName === 'Worm' ||
      item.firstName === 'Daario' ||
      item.family === 'Naathi'
    ) {
      return 'fire-glow-border'
    } else if (
      item.family === 'House Baratheon' ||
      item.firstName === 'Gendry' ||
      item.title === 'King'
    ) {
      return 'brown-to-green-glow-border'
    } else if (
      item.family === 'House Greyjoy' ||
      item.family === 'Greyjoy' ||
      item.family === 'House Seaworth'
    ) {
      return 'grey-glow-border'
    } else if (item.family === 'House Tyrell' || item.family === 'Tyrell') {
      return 'yellow-to-green-glow-border'
    } else if (
      item.lastName === 'Pycelle' ||
      item.firstName === 'Qyburn' ||
      item.firstName === 'Varys' ||
      item.firstName === 'Samwell' ||
      item.firstName === 'The High' ||
      item.firstName === 'Sandor'
    ) {
      return 'black-glow-border'
    } else if (
      item.family === 'Mormont' ||
      item.family === 'Viper' ||
      item.family === 'Sand'
    ) {
      return 'Yellow-glow-border'
    } else if (
      item.family === 'Bolton' ||
      item.family === 'House Baelish' ||
      item.firstName === 'Melisandre'
    ) {
      return 'red-glow-border'
    } else if (item.family === 'Lorath') {
      return 'glow-border'
    } else {
      return ''
    }
  }

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={item.imageUrl}
            className={`${setHouseBorder(item)}`}
          />
        </div>
        <div className="card-back">
          <h1>{item.fullName}</h1>
          <ul>
            <li>
              <strong>First Name:</strong> {item.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {item.lastName}
            </li>
            <li>
              <strong>Family Name:</strong> {item.family}
            </li>
            <li>
              <strong>Title:</strong> {item.title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default CharacterItem

// style={{
//   overflow: 'hidden',
//   // border: `${item.family === 'House Stark' ? '2px solid blue' : ''}`,
//   boxShadow: `${item.family === 'House Stark' ? '0px 0px 0px 3px rgba(0, 150, 255, 0.8)' : ''}`
//   // boxShadow: `${item.family === 'House Targaryen' ? '0px 0px 0px 3px rgba(255, 150, 0, 0.8)' : ''}`
//   // boxShadow: `${item.family === 'House Lannister' ? '0px 0px 0px 3px rgba(218, 165, 32, 0.8)' : ''}`
// }}

// {/* {conditionrest ? <img src={item.imageUrl} className="invisible-border" /> : ''} */}
// {/* <img src={item.imageUrl} alt=''
// // className={condition ? "stark-border" :" "}
// style={
//   condition
//     ? { border: '1px solid blue', padding: '1px' }
//     : condition2
//     ? { border: '1px solid gold', padding: '1px' }
//     : condition3
//     ? {
//       border: '10px solid #ffa07a',
//       border_top: '10px solid #ff0000',
//       border_radius: '50%',
//       animation: 'fire 1s linear infinite',
//       <style>
//       @keyframes fire {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     </style>
//     }
//     :{}
// }
// /> */}

// const [condition, setCondition] = useState(false)
//   const [condition2, setCondition2] = useState(false)
//   const [condition3, setCondition3] = useState(false)
//   const [condition4, setCondition4] = useState(false)
//   const [condition5, setCondition5] = useState(false)
//   const [condition6, setCondition6] = useState(false)
//   const [condition7, setCondition7] = useState(false)
//   const [condition8, setCondition8] = useState(false)
//   const [condition9, setCondition9] = useState(false)
//   const [condition10, setCondition10] = useState(false)
//       useEffect(()=>{
//         if (item.family === 'House Stark' || item.family === 'Free Folk' || item.family === 'Stark' || item.firstName === 'Gilly' || item.firstName === 'Brienne') {
//           setCondition(true)
//         }
//         if (item.family === 'House Lannister' || item.family === 'House Lanister' || item.family === 'Lannister' || item.firstName === 'Tommen' || item.lastName === 'Bronn' || item.firstName === 'Shae' ) {
//           setCondition2(true)
//         }
//         if (item.family === 'House Targaryen' || item.family === 'Targaryan' || item.lastName === 'Worm' || item.firstName === 'Daario' || item.family === 'Naathi') {
//           setCondition3(true)
//         }
//         if (item.family === 'House Baratheon' || item.firstName === 'Gendry' || item.title==='King' ) {
//           setCondition4(true)
//         }
//         if (item.family === 'House Greyjoy' || item.family === 'Greyjoy' || item.family === 'House Seaworth' ) {
//           setCondition5(true)}
//         if (item.family === 'House Tyrell' || item.family === 'Tyrell' ) {
//           setCondition6(true)
//         }
//         if (item.lastName === 'Pycelle' || item.firstName === 'Qyburn' || item.firstName === 'Varys' || item.firstName === 'Samwell' || item.firstName === 'The High' || item.firstName === 'Sandor') {
//           setCondition7(true)
//         }
//         if (item.family === 'Mormont' || item.family === 'Viper' || item.family === 'Sand') {
//           setCondition8(true)
//         }
//         if (item.family === 'Bolton' || item.family === 'House Baelish' || item.firstName === 'Melisandre') {
//           setCondition9(true)
//         }
//         if (item.family === 'Lorath') {
//           setCondition10(true)
//         }

//       }, [])

{
  /* {condition ? <img src={item.imageUrl} className="ice-glow-border" /> : ''}
                {condition2 ? <img src={item.imageUrl} className="golden-glow-border" /> : ''}
                {condition3 ? <img src={item.imageUrl} className="fire-glow-border" /> : ''}
                {condition4 ? <img src={item.imageUrl} className="brown-to-green-glow-border" /> : ''}
                {condition5 ? <img src={item.imageUrl} className="grey-glow-border" /> : ''}
                {condition6 ? <img src={item.imageUrl} className="yellow-to-green-glow-border" /> : ''}
                {condition7 ? <img src={item.imageUrl} className="black-glow-border" /> : ''}
                {condition8 ? <img src={item.imageUrl} className="Yellow-glow-border" /> : ''}
                {condition9 ? <img src={item.imageUrl} className="red-glow-border" /> : ''}
                {condition10 ? <img src={item.imageUrl} className="glow-border" /> : ''} */
}
