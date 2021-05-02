import React from "react";
const fakePhoto =
  "https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png";
const BlogCard = (props) => {
  const { title, body } = props.data;
  return (
    <div className="col-md-4 col-sm-12">
      <div
        className="card text-center mx-auto my-2 py-2 border border-3 rounded card-content"
        style={{ width: "90%", height: "460px" }}
      >
        <img src={fakePhoto} className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>

          <button className="btn btn-outline-danger mx-1 card-button">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
