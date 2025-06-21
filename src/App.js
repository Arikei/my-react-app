import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Editor from './pages/Editor';
import Viewer from './pages/Viewer';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">コード入力</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/view" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;