import './App.css'
import Dropdown from './components/Dropdown'


function App () {
  return (
    <div className="App">
      <Dropdown items = {['smartphones', 'laptops']}/>
    </div>
  )
}

export default App
