import {BrowserRouter as Rounter,Route,Routes} from 'react-router-dom'
import First from './components/First'
import Guardian from './components/Guardian'
import ScrollToTop from './components/ScrollToTop';
import Heritage from './components/Heritage';
import './styles/all.scss';
function App() {
  

  return (
    <Rounter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<First/>}/>
      <Route path="/games" element={<Guardian/>}/>
      <Route path="/heritage" element={<Heritage/>}/>
    </Routes> 
    
  </Rounter>
  )
}

export default App
