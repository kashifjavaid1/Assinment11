import './card.css'
import Image from 'next/image';
function Card(props) {
    return(
        <>
     
        <div className='card'> 
        <Image className='cardimage'
        src="/imagies/Group 12.png"
        alt="Group 12"
        width={50} 
        height={50} 
      />
  <h5 class="cardheading">{props.cardpop}</h5>
  <p class="cardparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing  auctor.Lorem ipsum dolor sit amet.</p>

</div>

        </>
    );
}
export default Card;