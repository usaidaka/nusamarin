import React from "react";
import classes from "../../styles/components/blogs/blogLists.module.scss";

type BlogItem = {
  id: number;
  category: string;
  title: string;
  blog: string;
  uploadedAt: string;
  images: {
    image: string;
  }[];
};

type BlogListsProps = {
  data: BlogItem[];
};

const BlogLists: React.FC<BlogListsProps> = ({ data }) => {
  return (
    <div className={classes.main}>
      <div className={classes.list}>
        <h1>RECENT ARTICLES</h1>
        {data.map((item) => (
          <div className={classes.card} key={item.id}>
            <div className={classes["blog-content"]}>
              <span className={classes.category}>{item.category}</span>
              <h2 className={classes.title}>{item.title}</h2>
              <p className={classes.excerpt}>
                {item.blog.slice(0, 150)}...
                <a href="#" className={classes["read-more"]}>
                  {" "}
                  Continue reading
                </a>
              </p>
              <p className={classes["reading-time"]}>4 minutes to read</p>
            </div>
            <div className={classes["blog-image"]}>
              <img src={item.images[0]?.image || ""} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLists;
