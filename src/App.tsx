import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css';
import ShowBids from './pages/ShowBids';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShowBids/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
