import Card1 from "../(components)/pricingCard/pricingcard";
import '../page.css'
function Portfolio() {
    return(
      <>
            <div className='ourpricing'>
        <div className='fsecpricing'>
          <p className='ourpera'>OUR PRICING</p>
          <h2>Choose A Plan That's Right For You</h2>
        </div>
        <div className='ourpricingcard'>
        <Card1 headingh5="Basic Plan" perahead1="$50/Month" peradata1="Grapic Design" peradata2="Web Design" peradata3="UI/UX" peradata4="HTML/CSS" peradata5="SEO Marketing" peradata6="Business Analysis"
        />
        
        <Card1 headingh5="Stander Plan"  perahead1="$99/Month" peradata1="Grapic Design" peradata2="Web Design" peradata3="UI/UX" peradata4="HTML/CSS" peradata5="SEO Marketing" peradata6="Business Analysis"/>
        <Card1 headingh5="Premium Plan"  perahead1="$150/Month" peradata1="Grapic Design" peradata2="Web Design" peradata3="UI/UX" peradata4="HTML/CSS" peradata5="SEO Marketing" peradata6="Business Analysis"/>
        </div>
      </div>
      </>
    );
  }
  export default Portfolio;