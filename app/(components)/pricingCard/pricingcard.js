import Button from '../button/button';
import './pricingCard.css'
import Image from "next/image";
function Card1(props) {
    return(
        <>
        
     
        <div className='card1'> 
        <h5 className='proheaging'>{props.headingh5}</h5>
        <Image className='cardimage1'
        src="/imagies/Group 12.png"
        alt="Group 12"
        width={50} 
        height={50} 
      />
  <div className='carddata'>
    <p className='peradhead1'>{props.perahead1}</p>
    <p>{props.peradata1}</p>
    <p>{props.peradata2}</p>
    <p>{props.peradata3}</p>
    <p>{props.peradata4}</p>
    <p>{props.peradata5}</p>
    <p>{props.peradata6}</p>
    <br></br>
    <Button btn="Start Now" className=""/>
  </div>

</div>
        </>
    );
}
export default Card1;