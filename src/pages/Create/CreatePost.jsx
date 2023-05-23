import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  };

  const [title, setTitle] = useState("");
  const [userText, setUserText] = useState("");
  let navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");

  const storePost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      userText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/forum");
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <h1>Submit your Innovation</h1>
        <label htmlFor="name">
          Name
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            placeholder="e.g I want to use AWS"
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <p>Reason</p>
        <textarea
          name="reason"
          id=""
          cols="30"
          rows="10"
          onChange={(event) => setUserText(event.target.value)}
        ></textarea>
        <label htmlFor="file" className="file" id="file">
          Attach file
          <input type="file" name="file" className="inputFile" />
        </label>
        <p>
          <input type="checkbox" />
          Post Anonymously?
        </p>
        <button type="submit" onClick={storePost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
