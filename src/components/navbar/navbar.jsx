import React from 'react';
import './navbar.css';
import {SiHandshakeProtocol} from 'react-icons/si';
import {FaUserAlt} from 'react-icons/fa';
import {BsHandbagFill, BsFillBookmarksFill} from 'react-icons/bs';

export default function navbar() {
  return (
    <div>



        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><SiHandshakeProtocol />Vigilate</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Special Edition</a></li>
                                <li><a class="dropdown-item" href="#">Featured Watches</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Casual Wear</a></li>
                                <li><a class="dropdown-item" href="#">Fitness & Sports</a></li>
                                <li><a class="dropdown-item" href="#">Classic Vintage</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Featured</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Collections</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
                    {/* <a class="nav-link" href="#"><BsFillBookmarksFill /></a> */}
                    <a class="nav-link" href="#"><FaUserAlt /></a>
                    <a class="nav-link" href="#"><BsHandbagFill /></a>
                </form>
                </div>
            </div>
        </nav>



    </div>
  )
}
