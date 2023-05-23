import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import "./Forum.css";

const Forum = (isAuth) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deletePost=async(id) => {
      const postDoc = doc(db,"posts", id);
      await deleteDoc(postDoc);
    }
    getPost();
  }, [deletePost]);


  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className="textContainer">{post.userText}</div>
            <h3>@{post.author.name}</h3>
            <button onClick={()=>deletePost(post.id)}>Delete</button>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Forum;
