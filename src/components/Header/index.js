import { capitalizeFirstLetter } from "../../utils/helpers";
import React from "react";
import Navigation from "../Navigation"

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}>
            </Navigation>
        </header>
    );
}

export default Header;