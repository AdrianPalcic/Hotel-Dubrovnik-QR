import React from 'react'
import CategoryCard from './CategoryCard'

const MenuSection = () => {

    //Replace this with the real database data
    const categories = [
        {
            id: 1,
            name: "Bezalkoholna pića",
            description: "Coca-Cola, Pepsi, Sprite, Fanta, etc.",
            image: "/Soft-drinks.jpg",
            category: "soft-drinks"
        },
        {
            id: 2,
            name: "Topli napitci",
            description: "Kava, Nescaffe, vruča čok...",
            image: "/Coffe.jpg",
            category: "topli-napitci"
        },
        {
            id: 3,
            name: "Alkoholna pića ",
            description: "Pive i žestice",
            image: "/Alcoholic-drinks.jpg",
            category: "alcoholic-drinks"
        },
        {
            id: 4,
            name: "Vina",
            description: "Pregledajte najkvalitetniji izbor vina",
            image: "/Wine.jpg",
            category: "Vina"
        },
    ]

    return (
        <section className="category-grid-container">
            <div className="category-grid">
                {
                    categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            title={category.name}
                            description={category.description}
                            image={category.image}
                            category={category.category}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default MenuSection