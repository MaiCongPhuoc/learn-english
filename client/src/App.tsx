import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout';
import Grammar from './pages/grammar';
import IrregularVerbTable from './pages/irregularVerbTable';
import Vocabulary from './pages/vocabulary';
import Passage from './pages/passage';
import { useEffect } from 'react';
import { getVocabulary } from './store/action';
import { useAppDispatch } from './store/hooks';
import { RootState } from './store/store';
import { Button, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function App() {
  const dispatch = useAppDispatch();

  const { data, error, loading } = useSelector(
    (state: RootState) => state.vocabulary
  );
  useEffect(() => {
    dispatch(getVocabulary());
  }, [dispatch]);
  return (
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
  );
}

export default App;
