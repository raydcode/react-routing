import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Blogs from './components/Blogs';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blog/:id" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
