import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"

const App = () => {
  const users = [
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
    },
    {
      img: 'https://i.pinimg.com/736x/42/ca/f3/42caf37b625231bfa38963aaba3adb0b.jpg',
      intro: '',
      tag: 'Satisfied'
    }, 
     {
      img: 'https://i.pinimg.com/736x/1d/53/3a/1d533a639017d4a13ceeac6421a0f0a1.jpg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://i.pinimg.com/736x/09/63/03/09630372b8e6f94257d5c6b3d47f0560.jpg',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://i.pinimg.com/736x/56/9c/60/569c605d6bce3512a8960209834b65c5.jpg',
      intro: '',
      tag: 'Satisfied'
    },
     {
      img: 'https://i.pinimg.com/736x/5a/eb/a8/5aeba8448609dcf8d90d2f58b0b869da.jpg',
      intro: '',
      tag: 'Underserved'
    },
     {
      img: 'https://i.pinimg.com/1200x/87/11/dd/8711dd2abf3ed1f4fe7cbf6bb7ad3d00.jpg',
      intro: '',
      tag: 'Underbanked'
    }

  ]
  
  return (
    <div>
  <Section1 users={users} />
  <Section2/>
    </div>
  )
}

export default App