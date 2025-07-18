import { createRoot } from 'react-dom/client'
import './index.css'
import { CursoTailwind } from './components/CursoTailwind.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CursoTailwind />} />
    </Routes>
  </BrowserRouter>
)
