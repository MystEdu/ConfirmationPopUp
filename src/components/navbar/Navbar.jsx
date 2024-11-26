import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Home | </Link>
      <Link to={"/room"}>Room</Link>
    </nav>
  )
}

export default Navbar;