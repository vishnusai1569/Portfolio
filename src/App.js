import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import One from './components/content/1';
import Two from './components/content/2';
import Three from './components/content/3';
import Four from './components/content/4';
import Five from './components/content/5';
import Six from './components/content/6';


function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path="about" element={<One />} />
        <Route path="Skils" element={<Two />} />
        <Route path="Projects" element={<Three />} />
        <Route path="Certificates" element={<Four />} />
        <Route path="Education" element={<Five />} />
        <Route path="Experience" element={<Six />} />
      </Route>

    </Routes>
  );
}

export default App;