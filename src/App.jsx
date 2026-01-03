import section1 from "./components/section1/section1"
import Section2 from "./components/section2/section2"

const App = () => {
  const user = [
    {
      img: 'https://i.pinimg.com/736x/56/9c/60/569c605d6bce3512a8960209834b65c5.jpg',
      intro: '',
      tag: 'Satisfied'
    },
     {
      img: 'https://i.pinimg.com/736x/ef/97/25/ef972507d073f998e8091814528e86d1.jpg',
      intro: '',
      tag: 'Underserved'
    },
     {
      img: 'https://i.pinimg.com/736x/00/6f/35/006f35912e927120671d93aced0b66ad.jpg',
      intro: '',
      tag: 'Underbanked'
    }
  ]
  
  return (
    <div>
  <section1 user={user} />
  <section2/>
    </div>
  )
}

export default App