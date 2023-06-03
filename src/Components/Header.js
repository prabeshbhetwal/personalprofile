import { MenuItems } from "./MenuItems";

export const Header = () => {
  const menuItems = [
    {
      href: "#skills",
      label: "Skills",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#about-me",
      label: "About Me",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ];
  return (
    <div className="hero">
      <nav className="navbar navbar-expand-md bg-none">
        <div className="container">
          <a className="navbar-brand" href="#">
            Prem
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {menuItems.map((item, index) => {
                return (
                  <MenuItems key={index} href={item.href} label={item.label} />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row mt-5 py-3">
          <div className="col-md-6 text-center order-md-2">
            <img src="assets/my.png" width="80%" alt="" />
          </div>
          <div className="col-md-6 mt-3 pb-3">
            hi 👋 i'm
            <div className="fs-1 fw-bolder mb-5">Prem Acharya</div>
            <p>
              I love coding and solving problems with code and teaching to other
              what i know that makes me feel happy
            </p>
            <button className="btn btn-danger">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};
