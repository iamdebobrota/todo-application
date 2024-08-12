import { useState } from "react";

const Home = () => {
  const [auth, setAuth] = useState(false);

const handleClick=()=>{
setAuth((prev)=> !prev);
}  
  return (
    <div
      style={{
        marginTop: "25px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        height: "80vh",
      }}>
      <h1>Home</h1>
      {auth && <h2>You are logged in as a Admin</h2>}
      <button onClick={handleClick}>{auth ? "Logout" : "Login as a Admin"}</button>
    </div>
  );
};
export default Home;

