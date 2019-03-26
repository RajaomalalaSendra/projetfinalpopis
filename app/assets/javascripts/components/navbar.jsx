const Navbar = () => {
    return(
        <div>
        <header className="header_area">
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-12 h-100">
                    <div className="menu_area h-100">
                        <nav className="navbar h-100 navbar-expand-lg align-items-center">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                            <div className="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                                <ul className="navbar-nav animated" id="nav">
                                    <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="appointments">Team</a></li>
                                    <li className="nav-item"><a className="nav-link" href="appointments">Contact</a></li>
                                </ul>
                                <div className="search-form-area animated">
                                    <form action="#" method="post">
                                        <input type="search" name="search" id="search" placeholder="Type keywords &amp; hit enter"></input>
                                        <button type="submit" className="d-none">search</button>
                                    </form>
                                </div>
                                <div className="login-register-btn">
                                    <a href="/users/sign_in">Login</a>
                                    <a href="/users/sign_up">/ Register</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
    )  
}