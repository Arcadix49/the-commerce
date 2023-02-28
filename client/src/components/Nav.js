import '../styles/Navbar.css';
import {Link} from "react-router-dom"
export  const Nav = () => {

    return(
        <div className="head">
            <nav>
                    <h1 className="title">TEA'MAGINE PAS</h1>
                    <Link to={'/auth/register'}><i class="fa-sharp fa-solid fa-user-plus"> Register</i></Link>
                    <Link to={'/auth/login'}><i class="fa-solid fa-right-to-bracket"> Login</i></Link>
                    <Link to={'/'}><i class="fa-solid fa-cart-shopping"> Cart</i></Link>
                    <Link to={'/'}><i class="fa-solid fa-mug-saucer"> Products</i></Link>
                    <Link to={'/'}><i class="fa-solid fa-house">  Home</i></Link>
                    <Link to={'/'}><i class="fa-solid fa-lock">  Admin</i></Link>
            
            </nav>
        </div>
    
    )
}