import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      
          <Link to="/" className="btn-primary">
            return home
          </Link>
        
      <RoomsContainer />
    </>
  );
};

export default Rooms;
