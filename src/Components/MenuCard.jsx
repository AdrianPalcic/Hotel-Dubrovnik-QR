import React from 'react';

const MenuCard = ({ item }) => {
    return (
        <div className="menu-card">
            <div className="menu-card-image">
                <img src={item.image} alt={`${item.name} image`} loading='lazy' />
            </div>
            <div className="menu-card-details">
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-volume">{item.volume || ""}</div>
            </div>
            <div className="menu-card-price">{item.price}€</div>
        </div>
    );
};

export default MenuCard;
