import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ imageSrc, title, description, link }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <div className="article-card" onClick={handleClick}>
            <img src={imageSrc} alt={title} className="article-image" />
            <div className="article-content">
                <h3 className="article-title">{title}</h3>
                <p className="article-description">{description}</p>
            </div>
        </div>
    );
};

export default ArticleCard;