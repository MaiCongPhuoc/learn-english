import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout';
import Home from './pages/home';
import Grammar from './pages/grammar';
import IrregularVerbTable from './pages/irregularVerbTable';
import Vocabulary from './pages/vocabulary';
import Passage from './pages/passage';
import { useEffect } from 'react';
import { AppDispatch } from './store/store';
import { getVocabulary } from './store/action';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getVocabulary());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/irregularVerbTable" element={<IrregularVerbTable />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/passage" element={<Passage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
