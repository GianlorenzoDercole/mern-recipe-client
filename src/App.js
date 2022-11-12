
import './App.css'
import Home from './components/pages/Home'
import Recipe from './components/pages/Recipe'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <main>
        
        <Routes>
          <Route path='/' element={<Home />}/>

          <Route path='/recipes/:id' element={<Recipe />}/>

        </Routes>
      </main>
    </Router>
  );
}

export default App;
