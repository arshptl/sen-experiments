import React from 'react'

const FullWidthNav = () => {
    return (
        <>
            <div className="navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div className="dropdown">

                    <button className="dropbtn">Dropdown
                        <i className="fa fa-caret-down"></i>
                    </button>

                    <div className="dropdown-content">
                        <div className="header">
                            <h2>Mega Menu</h2>
                        </div>
                        <div className="row">
                            <div className="column">
                                <h3>Category 1</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className="column">
                                <h3>Category 2</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className="column">
                                <h3>Category 3</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ padding: "16px" }}>
                <h3>Mega Menu (Full-width dropdown in navbar)</h3>
                <p>Hover over the <q>Dropdown</q> link to see the mega menu.</p>
            </div>
        </>
    )
}

export default FullWidthNav