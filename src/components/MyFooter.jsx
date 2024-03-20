import React from "react";
import {useContext} from "react";
import { ThemeContext } from './ThemeContextProvider';



const Footer = () => {
const {theme} = useContext(ThemeContext);

return (
<footer className="page-footer font-small blue pt-4"
style={{background: theme === 'light'? '#F8F9FA' : '#333', marginTop: '30px'}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase" style={{color: theme === 'light'?  '#333' : '#F8F9FA' }}>EpicBook Footer</h5>
                <p style={{color: theme === 'light'?  '#333' : '#F8F9FA' }}>This is a basic footer for my first react app for Epicode!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color: theme === 'light'?  '#333' : '#F8F9FA' }}>Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color: theme === 'light'?  '#333' : '#F8F9FA' }}>Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{color: theme === 'light'?  '#333' : '#F8F9FA' }}>© 2024 Copyright:
    </div>

</footer> 
)
}

export default Footer