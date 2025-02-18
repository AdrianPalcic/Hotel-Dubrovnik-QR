import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="breadcrumbs">
            <Link to="/">Home</Link> <span>›</span>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <span key={to}>{decodeURIComponent(value)}</span>
                ) : (
                    <React.Fragment key={to}>
                        <Link to={to}>{decodeURIComponent(value)}</Link> <span>›</span>
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
