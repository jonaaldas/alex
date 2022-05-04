import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  // created state to save the sting form the input
  const [error, setError] = useState({
    error: ''
  })


  function handleChange(evt) {
    setError({ error: evt.target.value });
    console.log(error)
  }
  function submit(event) {
    event.preventDefault();
    if (error.error) {
      console.log('We have something')
    } else {
      console.log('please write something')
    }
  }

  return (
    <div>
      <form>
        <label>
          First name
          <input
            type="text"
            value={error.error}
            onChange={handleChange}
          />
        </label>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
