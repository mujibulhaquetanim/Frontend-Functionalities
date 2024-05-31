import './App.css'
import BarGraph from './components/BarGraph';
import LineGraph from './components/LineGraph';

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold'>Let's ^Chart with react 🙂</h1>
      <LineGraph />
      <BarGraph/>
    </>
  )
}

export default App
