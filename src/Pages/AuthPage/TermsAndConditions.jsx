import React from "react";
import { Link } from "react-router-dom";
import CustomNavBar from "../Shared/Header/CustomNavBar";

const TermsAndConditions = () => {
  return (
    <>
      <CustomNavBar></CustomNavBar>
      <div className="w-50 mx-auto mt-5">
        <h3 className="text-center">Terms & Conditions</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ea
          repellat necessitatibus sunt voluptates quisquam dolore? Porro
          cupiditate omnis inventore. Consequatur quidem tenetur magni labore
          quas nostrum harum rerum ipsam itaque nihil quae officiis, neque, id
          quis, ipsum cupiditate voluptas ratione dolor cum soluta veniam
          temporibus! Ut, quos! Repudiandae nobis at assumenda. Ex veritatis
          maxime architecto dolor corrupti, quia repellendus eveniet dolores
          soluta quasi autem consequatur nam excepturi similique recusandae
          dolorem praesentium aperiam unde dignissimos sit dicta inventore vel
          et porro. Assumenda, officiis. Repudiandae natus sint eius dolorum
          soluta sit ea recusandae cupiditate! Doloribus quidem molestiae
          dolorum ipsum magnam tenetur.
        </p>
        <p className="">
          Go back to <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
