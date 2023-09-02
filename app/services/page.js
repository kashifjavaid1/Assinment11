import '../page.css'
import Card from "../(components)/card/card";
function Services() {
    return(
      <>
      <div class="container">
        <p id='serpera'>OUR SERVICES</p>
        <h1 id='serheading'>We Are Providing Digital services</h1>
      </div>
      <div className='cardrow'>
        <Card cardpop="Web Development" />
        <Card cardpop="Graphic Design"  />
        <Card cardpop="Digital Marketing" />
      </div>
      </>
    );
  }
  export default Services;