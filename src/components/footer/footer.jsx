import React from 'react';
import './footer.css';
import {ImTruck, ImPriceTags} from 'react-icons/im';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {SiHandshakeProtocol} from 'react-icons/si';
import {GiRoundStar} from 'react-icons/gi'

export default function footer() {
  return (
    <div>
        <div className="perks">
            <div className="row">
                <div className="col-sm-4 ms-auto" style={{"textAlign": "right"}}>
                    <h3 className='perk ms-auto'><ImTruck style={{"fontSize": "2.2em", "color": "red"}} /> &nbsp;Free Shipping</h3>
                </div>
                <div className="col-sm-4" style={{"textAlign": "center"}}>
                    <h3 className='perk'><ImPriceTags style={{"fontSize": "2.2em", "color": "red"}} /> &nbsp;Exclusive Deals</h3>
                </div>
                <div className="col-sm-4" style={{"textAlign": "left"}}>
                    <h3 className='perk'><RiSecurePaymentFill style={{"fontSize": "2.2em", "color": "red"}} /> &nbsp;Secure Checkout</h3>
                </div>
            </div>
        </div>
        <div className='testimonial'>
            <h1>Hear from our customers.</h1>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">Ayush K</h5>
                                <p class="card-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </p>
                                <h4>
                                <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='unrated' />
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">John S</h5>
                                <p class="card-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </p>
                                <h4>
                                <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' />
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">Paul S</h5>
                                <p class="card-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </p>
                                <h4>
                                <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='rated' /> <GiRoundStar className='unrated' />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="footer">
            <div className="row">
                <div className="col-sm-4">
                    <h1 style={{"fontFamily": "var(--italic)", "color": "white", "fontSize": "5rem"}}><SiHandshakeProtocol /> Vigilate</h1>
                    <h4 class="text-muted" style={{"marginTop": "8%", "fontFamily": "var(--right)"}}>Subscribe to our newsletters.</h4>
                    <form class="d-flex" style={{"marginTop": "4%"}}>
                        <input class="form-control me-2 search-bar" type="search" placeholder="Enter email address" aria-label="Search" /> &nbsp;
                        <button className="subscribe Btn">Subscribe</button>
                    </form>
                </div>
                <div className="col-sm-8">
                    <div className="row" style={{"padding": "4% 5%"}}>
                        <div className="col-sm-4">
                            <h2 className="footer-heading">Shop</h2>
                            <a href="#" className="footer-link text-muted">G-Shock</a> <br />
                            <a href="#" className="footer-link text-muted">Rolex</a> <br />
                            <a href="#" className="footer-link text-muted">Rebook</a> <br />
                            <a href="#" className="footer-link text-muted">FitBit</a> <br />
                            <a href="#" className="footer-link text-muted">MiBand900</a> <br />
                            <a href="#" className="footer-link text-muted">BabyG</a> <br />
                        </div>
                        <div className="col-sm-4">
                            <h2 className="footer-heading">Help</h2>
                            <a href="#" className="footer-link text-muted">Track your order</a> <br />
                            <a href="#" className="footer-link text-muted">Warranty & Support</a> <br />
                            <a href="#" className="footer-link text-muted">Return Policy</a> <br />
                            <a href="#" className="footer-link text-muted">Service Centers</a> <br />
                            <a href="#" className="footer-link text-muted">Bulk Orders</a> <br />
                            <a href="#" className="footer-link text-muted">FAQ</a> <br />
                        </div>
                        <div className="col-sm-4">
                            <h2 className="footer-heading">Showrooms</h2>
                            <a href="#" className="footer-link text-muted">United States</a><br />
                            <a href="#" className="footer-link text-muted">India</a> <br />
                            <a href="#" className="footer-link text-muted"> Russia</a> <br />
                            <a href="#" className="footer-link text-muted"> Japan</a> <br />
                            <a href="#" className="footer-link text-muted"> Canada</a> <br />
                        <a href="#" className="footer-link text-muted">United Kingdom</a> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
