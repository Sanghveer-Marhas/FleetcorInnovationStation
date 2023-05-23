import React from "react";
import SlideBar from "../../components/SlideBar/SlideBar";
const Home = () => {
  const images = [
    "https://www.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg",
    "https://www.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg",
    "https://www.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg"
  ];

  return (
    <div>
      <h1>Get your ideas noticed! </h1>
      <SlideBar images={images} />
      <p>Welcome to the Innovation Station</p>
      <p>See the top rated ideas below!</p>
    </div>
  );
};

export default Home;
