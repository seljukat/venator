import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const NavBar = () => {

    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("main-navbar").style.top = "0";
    } else {
        document.getElementById("main-navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }

    const location = useLocation();

    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
    return (
        <nav id='main-navbar'>
            <ul>
                
                {/* <img src={logo} alt='Venator Logo' /> */}
                
                {/* <li className='logoLink'>
                    <Link to="/"><img className='logo' src={logo} alt='Venator Logo' /></Link>
                </li> */}

                <li className={splitLocation[1] === "" ? "main-nav-active" : ""}>
                    <Link className='main-nav-a' to="/">Home</Link>
                </li>
                <li className={splitLocation[1] === "project" ? "main-nav-active" : ""}>
                    <Link className='main-nav-a' to="/project">Project</Link>
                </li>
                <li className={splitLocation[1] === "documentations" ? "main-nav-active" : ""}>
                    <Link className='main-nav-a' to="/documentations">Documentations</Link>
                </li>
                <li className={splitLocation[1] === "logs" ? "main-nav-active" : ""}>
                    <Link className='main-nav-a' to="/logs">Logs</Link>
                </li>
                <li className={splitLocation[1] === "developers" ? "main-nav-active" : ""}>
                    <Link className='main-nav-a' to="/developers">Developers</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
