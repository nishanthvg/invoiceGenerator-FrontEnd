import React from 'react'
import Logo from "../image/Screenshot 2021-02-01 at 11.48.15 PM.png"
import "../css/home.css"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className = "homePage">
            <img src={Logo} className="homePage_logo" alt="logos"/>
            <div className = "homePage_button">
                <Button component={Link} to="/createInvoice" color="primary" >New Invoice</Button>
                <Button component={Link} to="/invoice" color="primary">Previos Invoice</Button>
            </div>
        </div>
    )
}

export default HomePage
