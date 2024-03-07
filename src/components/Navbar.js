import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import {Navbar,Button} from "react-bootstrap";
import "../pages/App.css"

export default function BootstrapNavbar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

  return (
    <Navbar expand="sm" className="custom-navbar">
      <h1 href="#home" className="ms-2" style={{ color: "black", fontSize: "1.5rem" }}>Stock Portfolio</h1>
        <div className="ms-auto">
          {user && user.name ? (
            <>
            <Navbar.Text className="m-3">
              WELCOME, {user.name}
            </Navbar.Text>
            <Button  className="btn btn-danger me-3">
              <Link  onClick={handleLogOut} style={{textDecoration:"none", color:"aliceblue"}}>
              Log Out
              </Link>
            </Button>
            </>
        ) : null
        }
        </div>
    </Navbar>
  );
}
