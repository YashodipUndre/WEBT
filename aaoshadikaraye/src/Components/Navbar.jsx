
const Navbar = () => {
  return (
    <nav>
      <div role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">
              Aao Shaadi Karaye
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="">Venues</a>
              </li>
              <li>
                <a href="">Decoration</a>
              </li>
              <li>
                <a href="">Makeup</a>
              </li>
              <li>
                <a href="">Food</a>
              </li>
              <li>
                <a href="">Photographers</a>
              </li>
              <li>
                <a href="">Clothing</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
