import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="data:image/png;base64,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" alt="Bootstrap" width="30" height="24" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/add">Add Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/ViewAll">View all Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar