import { NavLink } from "react-router-dom";

interface linkType {
  path: string;
  name: string;
}

const Navbar = () => {
  const links: linkType[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/todo",
      name: "Todo",
    },
  ];
  const activeStyle = {
    color: "red",
    textDecoration: "none",
    fontSize: "20px",
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "lightgreen",
        padding: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "fixed",
        top: "0px",
        width: "100%",
      }}>
      <p>Todo Application</p>
      <div style={{ display: "flex", gap: "50px" }}>
        {links.map((el) => {
          return (
            <NavLink
              key={el.path}
              to={el.path}
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
              {el.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
