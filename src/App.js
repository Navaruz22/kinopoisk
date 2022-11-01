import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Pages from "./pages/Pages";

const App = () => {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <SideBar />
        <Pages />
      </div>
      <Footer />
    </>
  );
};

export default App;
