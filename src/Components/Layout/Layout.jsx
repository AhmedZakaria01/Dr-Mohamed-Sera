import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
// import styles from './Layout.css'
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
const Layout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="mt-5">{!loading ? <Outlet /> : <Loading />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
