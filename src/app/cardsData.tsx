import AdusDescription from "./components/organisms/card/descriptions/AdusDescription"
import AndesDescription from "./components/organisms/card/descriptions/AndesDescription"
import GlobantDescription from "./components/organisms/card/descriptions/GlobantDescription"
import MuniDescription from "./components/organisms/card/descriptions/MuniDescription"

export const globantData = {
  images: [
    {
      path: '/icons/workPlaces/globantLogo.png',
      selected: true,
      id: 'globant',
      alt: 'globant logo'
    }
  ],
  details: [
    { title: 'Globant', imgId: 'globant', text: <GlobantDescription /> },
  ]
}
export const andesData = {
  images: [
    {
      path: '/icons/workPlaces/andesLogo.png',
      id: 'andes',
      selected: false,
      alt: 'andes logo'
    },
  ],
  details: [
    { title: 'Andes', imgId: 'andes', text: <AndesDescription /> },
  ]
}
export const muniData = {
  images: [
    {
      path: '/icons/workPlaces/muni.png',
      id: 'muni',
      selected: false,
      alt: 'municipallity logo',
      style: { top: '-50px', position: 'relative' },
    },
  ],
  details: [
    { title: 'Municipality of Neuquen', imgId: 'muni', text: <MuniDescription /> },
  ]
}
export const adusData = {
  images: [
    {
      path: '/icons/workPlaces/adus.jpg',
      id: 'adus',
      selected: false,
      alt: 'adus logo',
      style: { top: '-100px', position: 'relative' },
    }
  ],
  details: [
    { title: 'ADUS / IPVU', imgId: 'adus', text: <AdusDescription /> }
  ]
}