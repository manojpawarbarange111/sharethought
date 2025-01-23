const Navbar = () => {
    return (
        <nav className="navbar bg-base-200 box-shadow p-4">
            <div className="flex-1">
                <a className="text-xl font-bold">Thoughts</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a className="hover:link">Pricing</a></li>
                    <li><a className="hover:link">Faq</a></li>
                </ul>
                <button className="btn btn-primary ml-4">Login</button>
            </div>
        </nav>
    );
}

export default Navbar;