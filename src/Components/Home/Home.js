import React from "react";
import './home.css';
import Lists from '../Lists/Lists';

const Home = () => {


  return(
    <section className="home-wrapper">
      <div className="list-component">
        <Lists/>
      </div>
    </section>
  );
}

export default Home;