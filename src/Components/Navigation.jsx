import "./Navigation.css";
function Navigation(){
    return(
        <>
        <div className="navigation-bar">
            <nav>
                <img src="../src/assets/brand_logo.png" alt="Brand logo"/>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
        </>
    )
}
export default Navigation;