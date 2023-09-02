import Image from "next/image";
import Button from "../(components)/button/button";

import '../page.css'
function About() {
    return(
      <>
     {/* about us */}
<div className='aboutusdection'>
        <Image className='aboutasimagies'
        src="/imagies/Rectangle 55.png"
        alt="Rectangle55"
        width={400} 
        height={300}
      />
      <div className='aboutsec2'>
         <p className='aboutpera'>ABOUT AS</p>
         <h1 className='abouheading'>We Design,build brand<br></br> & Digital projects.</h1>
         <p className='aboutpera1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br>when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <Button btn="Read More"/>
      </div>

      </div>
      </>
    );
  }
  export default About;