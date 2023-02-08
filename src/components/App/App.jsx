import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));

const App = () => {

  return (
    <Routes>
<Route index element={<Home />} />
    </Routes>
    
  );
};
export default App;