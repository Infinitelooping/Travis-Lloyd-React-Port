import React from "react";

function Navigation(props) {
    const {
        currentPage,
        setCurrentPage
    } = props;

    return (
        <div className="flex-row px-1">
            <h2>
                Travis Lloyd
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${currentPage === 'about' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('about')}>About Me
                        </span>
                    </li>
                    <li className={`mx-2 ${currentPage === 'portfolio' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('portfolio')}>Portfolio
                        </span>
                    </li>
                    <li className={`mx-2 ${currentPage === 'resume' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('resume')}>Resume
                        </span>
                    </li>
                    <li className={`mx-2 ${currentPage === 'contact' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('contact')}>Contact</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;