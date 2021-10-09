import './header.css'
function Header(){
    return(
        <div className = "head-main">
            <h1 className = "title">Home page</h1>
            <div className = 'links'>
                 <span>Home</span>
                 <span>About</span>
                 <span>Services</span>
                 <span>Contact</span>
            </div>
        </div>
    )
}
export default Header