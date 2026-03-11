
import React from "react";
import { NavLink } from "react-router";
import HeaderNavLink from "./HeaderNavLink";
//rafce
const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm bg-green-900">
            <div className="flex max-w-7xl mx-auto w-full">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl px-0">EventHub</a>
                </div>
                <div className="flex-none">
                    <HeaderNavLink to="/" linkText="Home" />
                    <HeaderNavLink to="/register" linkText="Register" />
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
