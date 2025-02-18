import React, { useMemo } from "react";
import { useParams } from 'react-router-dom';
import MenuCard from '../Components/MenuCard';
import FooterCTA from '../Components/FooterCTA';
import menuData from '../menuData.js';
import Breadcrumbs from '../Components/BreadCrumbs.jsx';

const Menu = () => {
    const { category } = useParams();

    // Formatiranje kategorije (pretvara "topla-pica" u "Topla Pica")
    const formattedCategory = category
        .replace(/[:-]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());

    // Traženje kategorije u menuData (ignorira velika/mala slova)
    const categoryData = useMemo(() =>
        menuData.find(cat => cat.category.toLowerCase() === category.toLowerCase()),
        [category]);

    return (
        <main>
            <div className="menu-container">
                <Breadcrumbs />
                <h2>{formattedCategory}</h2>

                {categoryData ? (
                    <>
                        {/* Normalna kategorija bez podkategorija */}
                        {categoryData.items?.map((drink) => (
                            <MenuCard key={drink.name} item={drink} />
                        ))}
                    </>
                ) : (
                    <p>Kategorija nije pronađena.</p>
                )}
            </div>
            <FooterCTA />
        </main>
    );
};

export default Menu;
