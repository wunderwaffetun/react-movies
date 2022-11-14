import React from 'react'

export default function Header() {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper">
                <a href="./" className="brand-logo" style={{padding: '0 10px'}}>
                    REACT MOVIES
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/wunderwaffetun">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
