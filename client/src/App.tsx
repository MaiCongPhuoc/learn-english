import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout';
import Grammar from './pages/grammar';
import IrregularVerbTable from './pages/irregularVerbTable';
import Vocabulary from './pages/vocabulary';
import Passage from './pages/passage';
import { useEffect } from 'react';
import { getVocabulary } from './store/action';
import { useAppDispatch } from './store/hooks';
import { API_URL } from './type';

function App() {
  console.log('API_URL: ', API_URL);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getVocabulary());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Grammar />} />
          {/* <Route path="/grammar" element={<Grammar />} /> */}
          <Route path="/irregularVerbTable" element={<IrregularVerbTable />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/passage" element={<Passage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
