import React from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from '../Components/MenuCard';
import FooterCTA from '../Components/FooterCTA';
import CategoryCard from '../Components/CategoryCard'; // Import CategoryCard
import menuData from '../menuData.js';

const Menu = () => {
    const { category, subcategory } = useParams();
    console.log("Category from URL:", category);
    console.log("Subcategory from URL:", subcategory);

    // Find the category data in menuData (case-insensitive comparison)
    const categoryData = menuData.find(
        cat => cat.category.toLowerCase() === category?.toLowerCase()
    );
    console.log("Fetched category data:", categoryData);

    // If the category is "Vina" and no subcategory is selected, render subcategories
    if (category?.toLowerCase() === "vina" && !subcategory) {
        const wineCategory = menuData.find(cat => cat.category === "vina");
        return (
            <main>
                <div className="menu-container">
                    <h2>Vina</h2>
                    <div className="category-grid">
                        {wineCategory?.subcategories?.map((sub) => (
                            <CategoryCard
                                key={sub.subcategory}
                                title={sub.subcategory}
                                description={`Explore our ${sub.subcategory}`}
                                image={`/images/${sub.subcategory}.jpg`} // Add appropriate images
                                category={sub.subcategory}
                                isSubcategory={true} // Indicate this is a subcategory
                            />
                        ))}
                    </div>
                </div>
                <FooterCTA />
            </main>
        );
    }
    const categoryForTitle = category.replace(/-/g, ' ') // "topli-napitci" -> "topli napitci"
        .replace(/\b\w/g, c => c.toUpperCase());

    // If a subcategory is selected, render its items
    if (category?.toLowerCase() === "vina" && subcategory) {
        const wineCategory = menuData.find(cat => cat.category === "vina");
        const selectedSubcategory = wineCategory?.subcategories?.find(
            sub => sub.subcategory.toLowerCase() === subcategory.toLowerCase()
        );
        return (
            <main>
                <div className="menu-container">
                    <h2>{selectedSubcategory?.subcategory}</h2>
                    {selectedSubcategory?.items?.map((drink) => (
                        <MenuCard key={drink.name} item={drink} />
                    ))}
                </div>
                <FooterCTA />
            </main>
        );
    }

    // For other categories, render their items
    return (
        <main>
            <div className="menu-container">
                <h2>{categoryForTitle}</h2>

                {categoryData ? (
                    <>
                        {/* Render items if they exist in the main category */}
                        {categoryData.items?.length > 0 && (
                            categoryData.items.map((drink) => (
                                <MenuCard key={drink.name} item={drink} />
                            ))
                        )}

                        {/* Render subcategories if they exist */}
                        {categoryData.subcategories?.length > 0 && (
                            categoryData.subcategories.map((sub) => (
                                <div key={sub.subcategory}>
                                    <h3>{sub.subcategory}</h3>
                                    {sub.items.map((drink) => (
                                        <MenuCard key={drink.name} item={drink} />
                                    ))}
                                </div>
                            ))
                        )}
                    </>
                ) : (
                    <p>Category not found.</p>
                )}
            </div>
            <FooterCTA />
        </main>
    );
};

export default Menu;