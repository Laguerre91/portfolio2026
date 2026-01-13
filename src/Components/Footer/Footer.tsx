import './Footer.css';

const Footer = () => {
    return ( 
        <section id="footer">
            <div id='navigation-list'>  
                <div id='left-container' className='left-container'>
                    <div className='navigate-title'>
                        <p>NAVIGATE</p>
                    </div>
                    <a href="#home" className='footer-link'>Home</a>
                    <a href="#about" className='footer-link'>About</a>
                    <a href="#projects" className='footer-link'>Projects</a>
                    <a href="#contact" className='footer-link'>Contact</a>
                </div>

                <div id='right-container' className='right-container'>
                    <a href="https://www.linkedin.com/in/lara-aguerre-982b25221/" target="_blank" className='footer-link'>LinkedIn</a>
                </div>
            </div>
            <p className='footer-title'>LARA AGUERRE</p>
            <p className='footer-text'>Made with ❤️</p>
        </section>
    )
}

export default Footer;