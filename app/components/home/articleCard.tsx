import React from "react";
import classes from "../../styles/components/home/articleCard.module.scss";

interface ArticleCardProps {
  articles: {
    id: number;
    img: string;
    category: string;
    title: string;
    caption: string;
  }[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articles }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.section}>
        <h1>In the news</h1>
      </div>
      <div className={classes.main}>
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`${classes.card} ${
              index === 0 || index === 3 ? classes.large : ""
            } ${index === articles.length - 2 ? classes.last : ""}`}
            style={{ backgroundImage: `url(${article.img})` }}
          >
            <div className={classes.overlay}></div>
            <div className={classes.content}>
              <p className={classes.category}>{article.category}</p>
              <h2 className={classes.title}>{article.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
