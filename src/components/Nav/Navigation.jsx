import React from "react";
// import { useTheme } from "./ThemeContext";
const Navigation = () => {
  // const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ backgroundColor: "#F3F4F6" }} className="">
      <nav className="navbar rounded-sm">
        {/* <!-- LOGO --> */}
        <div className="logo">
          <h2>WINIT</h2>
        </div>

        {/* <header className={theme === 'light' ? 'bg-white' : 'bg-gray-800'}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header> */}

        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>

            <li>
              <a href="/">Services</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
