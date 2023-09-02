import Image from "next/image";
import './aboutcard.css'
function Aboutcard(props) {
return(
    <>
    <div className="aboutcard">
      <Image className='aboutasimagiescard'
        src="/imagies/Group 12.png"
        alt="Rectangle55"
        width={50} 
        height={50}
      />
      <h3 className="aboutheadeing3">{props.about}</h3>
        <p className="aboutpera3">Lorem ipsum dolor sit amet, consectetur adipiscing  auctor.Lorem ipsum dolor sit amet.</p>
        </div>
    </>
);
}
export default Aboutcard;