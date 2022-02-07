import React from "react";

function Navigation(props) {
    const {
        // contactSelected,
        // setContactSelected,
        // portfolioSelected,
        // setPortfolioSelected,
        // aboutSelected,
        // setAboutSelected,
        // resumeSelected,
        // setResumeSelected
        currentPage,
        setCurrentPage
    } = props;

    return (
        <div className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"></span>My Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2`}>
                        <span onClick={() => setCurrentPage('about')}>About Me
                        </span>
                    </li>
                    <li className={`mx-2`}>
                        <span onClick={() => setCurrentPage('contact')}>Contact</span>
                    </li>
                    <li cclassName={`mx-2`}>
                        <span onClick={() => setCurrentPage('portfolio')}>Portfolio
                        </span>
                    </li>
                    <li className={`mx-2`}>
                        <span onClick={() => setCurrentPage('resume')}>Resume
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;