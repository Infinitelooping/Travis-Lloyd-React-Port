import React from "react";
import Navigation from "../Navigation"

function Header(props) {

    const {
        currentPage,
        setCurrentPage
    } = props;

    return (
        <header className="flex-row px-1">
            <Navigation
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}>
            </Navigation>
        </header>
    );
}

export default Header;