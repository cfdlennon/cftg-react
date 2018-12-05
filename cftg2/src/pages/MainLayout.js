import React from 'react'
import {Link} from 'react-router-dom'

class MainLayout extends React.Component {
    handleClose = () => {
        const overlay = document.getElementsByClassName('mdl-layout__obfuscator')[0]
        const drawer = document.getElementsByClassName('mdl-layout__drawer')[0]
        const button = document.getElementsByClassName('mdl-layout__drawer-button')[0]

        if (overlay && drawer && button) {
            overlay.classList.remove('is-visible')
            drawer.classList.remove('is-visible')
            drawer.setAttribute('aria-hidden', 'true')
            button.setAttribute('aria-expanded', 'false')
        }
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <div
                    className="android-header mdl-layout__header mdl-layout__header--waterfall">
                    <div className="mdl-layout__header-row">
                        <span className="android-title mdl-layout-title">
                            <img className="android-logo-image" src="/images/logo.png" alt="logo"/>
                        </span>
                        {/* Add spacer, to align navigation to the right in desktop */}
                        <div className="android-header-spacer mdl-layout-spacer"></div>
                        <span className="android-mobile-title mdl-layout-title">
                            <img className="android-logo-image" src="/images/logo.png" alt="logo"/>
                        </span>
                    </div>
                </div>
                <div className="android-drawer mdl-layout__drawer">
                    <span className="mdl-layout-title">
                        <img className="android-logo-image" src="/images/logo.png" alt="logo"/>
                    </span>
                    <nav className="mdl-navigation">
                    <Link to="/" className="mdl-navigation__link" onClick={this.handleClose}>Beranda</Link>
                        <Link to="/about-us" className="mdl-navigation__link" onClick={this.handleClose}>Tentang Kami</Link>
                        <Link to="/contact" className="mdl-navigation__link" onClick={this.handleClose}>Kontak</Link>
                        <a className="mdl-navigation__link" href="http://www.nceec.id/" onClick={this.handleClose}>Web Lembaga Kursus</a>
                        <div className="android-drawer-separator"></div>
                        <Link to="/monitor" className="mdl-navigation__link" onClick={this.handleClose}>Pemantauan Trafik Hotspot</Link>
                        <Link to={'/limit'} className="mdl-navigation__link" onClick={this.handleClose}>Pembatasan Kecepatan</Link>
                        <Link to={'/block'} className="mdl-navigation__link" onClick={this.handleClose}>Blok Situs</Link>
                    </nav>
                </div>
                <div className="android-content mdl-layout__content">
                    {this.props.children}
                </div>
                <footer className="android-footer mdl-mega-footer">
                    <div className="mdl-mega-footer--top-section">
                        <div className="mdl-mega-footer--right-section">
                            <a className="mdl-typography--font-light" href="#top">
                                Back to Top
                                <i className="material-icons">expand_less</i>
                            </a>
                        </div>
                    </div>
                    <div className="mdl-mega-footer--middle-section">
                        <p className="mdl-typography--font-light">
                            © 2017 Chafidz Maulana</p>
                        <p className="mdl-typography--font-light">All components provided by Material UI</p>
                    </div>
                </footer>
            </div>
        )
    }
} 

export default MainLayout
