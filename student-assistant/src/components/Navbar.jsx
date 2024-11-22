import classes from './Navbar.module.css';

function Navbar() {
    return (
        <>
        <div className={classes.navbar}>
            <div className={classes.navlogo}>
            <img id="nav-img" src="https://brand.uci.edu/master-branding/marks/_img/BCeater-right-768x416.png" alt="UCI Anteater" />
                <h1>ZotPal</h1>
            </div>
        </div>
        </>
    );
}

export default Navbar;