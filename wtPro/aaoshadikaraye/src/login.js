import { NavBar, SideMenu } from "./Lander";
import "./CSS/SignUp.css";
import LogoRingPink from "./Images/icons8-wedding-ring-64-pink.png";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "./UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [SMBDSIZE, setSMBDSIZE] = useState("0px");
  function SideMenuLoader() {
    if (SMBDSIZE === "0px") {
      setSMBDSIZE("200px");
    } else if (SMBDSIZE === "200px") {
      setSMBDSIZE("0px");
    }
  }
  const [user, authUser] = useAuth();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = value;
    setFormData({ ...formData, [name]: newValue });
  };
  const [constent, setContest] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., sending data to server
    try {
      const ans = await axios.post("http://localhost:8080/login", formData);
      if (ans.data._id) {
        console.log(ans.data);
        authUser(ans.data);
        localStorage.setItem("auth", JSON.stringify(ans.data));
        history("/MainPage");
      } else {
        setContest("incorrect password!");
      }
    } catch (error) {
      setContest("Check username and password");
    }
  };

  return (
    <div>
      <NavBar onClick={SideMenuLoader}></NavBar>
      <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
      <div className="popup">
        <div className="popupInner">
          <div id="popSt">
            <p>{constent}</p>
          </div>
          <img
            className="log"
            alt={LogoRingPink}
            src={LogoRingPink}
            style={{ width: "50px" }}
          />
          <h2 className="h2tag">AaoShaadiKaraye</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div id="LastDiv">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
