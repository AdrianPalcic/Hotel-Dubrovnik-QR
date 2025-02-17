import { Link } from "react-router-dom";

const CategoryCard = ({ title, description, image, category, isSubcategory }) => {

    const url = isSubcategory ? `/menu/vina/${category}` : `/menu/${category}`;

    return (
        <Link to={url}>
            <div className="category-card">
                <img src={image || "/Coffe.jpg"} alt={title} className="category-image" loading="lazy" />
                <div className="category-content">
                    <h3 className="category-title">{title || "title"}</h3>
                    <p className="category-description">{description || "Description"}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;