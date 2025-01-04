import { Routes, Route } from 'react-router-dom';
import { routePaths } from './index';
import { Home } from '../views/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routePaths.HOME} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
