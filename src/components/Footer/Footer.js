import React from 'react';
import './Footer.css';

const footer = props => (
    <div className="footer">
        <div className="contactus">
            <span className="footer-subheading">Contact Us</span>
            <span>+44 345 678 903</span>
            <span>adobexd@mail.com</span>
            <span>Find a Store</span>
        </div>

        <div className="customerService">
            <span className="footer-subheading">Customer Service</span>
            <span>Contact Us</span>
            <span>Ordering & Payment</span>
            <span>Shipping</span>
            <span>Returns</span>
            <span>FAQ</span>
        </div>

        <div className="information">
            <span className="footer-subheading">information</span>
            <span>About Adobe XD Kit</span>
            <span>Work With US</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Press Enquiries</span>
        </div>

        <div className="socialMedia">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="footer-subheading">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary btn-primary--footer">Submit</button>
            </form>
        </div>    
    </div>    
);

export default footer;
