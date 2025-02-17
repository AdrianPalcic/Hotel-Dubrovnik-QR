import React from 'react'
import CategoryCard from '../Components/CategoryCard'
import FooterCTA from '../Components/FooterCTA'

const Vina = () => {

    const categories = [
        {
            id: 5,
            name: "Bijela Vina",
            description: "Vrhunska bijela vina",
            category: "bijela-vina",
            image: "/bijela.jpg",
        },
        {
            id: 6,
            name: "Crvena Vina",
            description: "Vrhunska crvena vina",
            category: "crvena-vina",
            image: "/crvena.jpg",
        },
        {
            id: 7,
            name: "Pjenušava Vina",
            description: "Vrhunska pjenušava vina",
            category: "pjenušava-vina",
            image: "/pjenusava.jpg",
        },
        {
            id: 8,
            name: "Desertna Vina",
            description: "Vrhunska desertna vina",
            category: "desertna-vina",
            image: "/desertna.jpg",
        }
    ]

    return (
        <main>
            <section className="category-grid-container">
                <h2>Vina</h2>
                <div className="category-grid">
                    {
                        categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                title={category.name}
                                description={category.description}
                                image={category.image}
                                category={category.category}
                                isSubcategory={true}
                            />
                        ))
                    }
                </div>
            </section>
            <FooterCTA />
        </main>
    )
}

export default Vina