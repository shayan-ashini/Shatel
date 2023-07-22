
import Nav1 from './nav1/index.jsx'
import Nav2 from './nav2/index.jsx'
import Slider from './slider/index.jsx'
import Note from './note/index.jsx'
import Box1 from './box1/index.jsx'
import Box2 from './box2/index.jsx'
import Min from './mid/index.jsx'
import Footer from './footer/index.jsx'
import News from './news/index.jsx'

function App() {
  return (


    <main className='container-fluid p-0 container-xxl overflow-hidden '>
      <Nav1 />
      <Nav2 />
      <Slider/>
      <Note/>
      <Box1/>
      <Box2/>
      <Min/>
      <News/>
      <Footer/>
    </main>

  )

}

export default App;
