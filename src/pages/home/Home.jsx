import Feature from "../../components/feature/Feature";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Login from "../login/Login";
import Register from "../register/Register";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      l<Feature type="movie" />
      <List />
      <List />
      <List />
      <List />
      <Register />
      <Login />
    </div>
  );
};

export default Home;
