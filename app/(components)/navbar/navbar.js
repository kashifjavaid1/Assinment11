import Link from "next/link";
import './navbar.css'
function Navbar() {
   return(
    <>
 <div className="container-fluid">
    <div className="logo">LOGO.</div>
    <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/pages">PAGES</Link></li>
        <li><Link href="/services">SERVICES</Link></li>
        <li><Link href="/portfolio">PORTFOLIO</Link></li>
        <li><Link href="/blog">BLOG</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>  
    </ul>
    <div className="search">
    <input type="sear" name="sear" placeholder="search"></input>
    </div>
 </div>

     
    </>
   ); 
}
export default Navbar;