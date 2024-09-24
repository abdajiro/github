import './App.css';
import Calendar from './components/Calendar';
const App = () => {
  console.log(<Calendar/>)
  return (
    <div className="App">
      <h1>🌧️Seattle 7 day Iternary🏙️</h1>
      <h2>Weclome to the Evergreen City and get ready for an Amazing week!</h2>
      <Calendar/>
      
    </div>
  )
}

export default App