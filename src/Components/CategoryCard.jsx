import { Link } from "react-router-dom";
import React from "react";


const CategoryCard = React.memo(({ title, description, image, category }) => {
    return (
        <Link to={category !== "vina" ? `/${category}` : '/vina'}>
            <div className="category-card">
                <img src={image || "/Coffe.jpg"} alt={title} className="category-image" loading="lazy" />
                <div className="category-content">
                    <h3 className="category-title">{title || "title"}</h3>
                    <p className="category-description">{description || "Description"}</p>
                </div>
            </div>
        </Link>
    );
});

export default CategoryCard;