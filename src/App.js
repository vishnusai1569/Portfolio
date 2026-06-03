import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import One from './components/content/1';
import Two from './components/content/2';
import Three from './components/content/3';
import Four from './components/content/4';
import Five from './components/content/5';
import Six from './components/content/6';
import Seven from './components/content/7';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path="1" element={<One />} />
        <Route path="2" element={<Two />} />
        <Route path="3" element={<Three />} />
        <Route path="4" element={<Four />} />
        <Route path="5" element={<Five />} />
        <Route path="6" element={<Six />} />
        <Route path="7" element={<Seven />} />
      </Route>

    </Routes>
  );
}

export default App;