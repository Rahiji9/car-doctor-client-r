import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shered/Footer/Footer';
import Navbar from '../pages/Shered/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;