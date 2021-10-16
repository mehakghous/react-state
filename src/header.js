import React from 'react'
import './header.css'
class Header extends React.Component{

    state = {
        appName: "Practice home-page"
    }
    render(){
        return (
            <div className="head-main">
                <h1 className="title">{this.state.appName}</h1>
                <div className='links'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                </div>
            </div>
        )

    }

}
export default Header