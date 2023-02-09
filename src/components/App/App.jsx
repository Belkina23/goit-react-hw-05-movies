import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from 'components/NavBar';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
