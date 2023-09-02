import './page.css'
import Image from 'next/image';
import Card from './(components)/card/card';
import Button from './(components)/button/button';
import Aboutcard from './(components)/aboutcard/aboutcard';
import Box from './(components)/box/box';
import Card1 from './(components)/pricingCard/pricingcard';


function Home() {
  return (
    <>
       <div className="header">
        <h1>Creative <br></br> Digital Agancy</h1>
        <p className="parnav">It is a long established fact that a reader will be distracted. <br>
        </br>long established fact that a reader</p>
        <Button btn="Learn More"/>
      </div> 
      <div class="container">
        <p id='serpera'>OUR SERVICES</p>
        <h1 id='serheading'>We Are Providing Digital services</h1>
      </div>
      <div className='cardrow'>
        <Card cardpop="Web Development" />
        <Card cardpop="Graphic Design"  />
        <Card cardpop="Digital Marketing" />
      </div>

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
      <div className='aboutrow'>
      <Aboutcard about="Smart Planning"/>
      <Aboutcard about="Our partnership"/>
      <Aboutcard about="Super Ideas"/>
      </div>
      {/* end aboutsection */}
      {/* our portfolio */}
      <div className= "portfoliosection">
        <div>
          <p className='peraportfolio'>Our portfolio</p>
          <h1 className='headportfolio' >Take A Look At Our Latest Work</h1>
        </div>

         <div className='rowportfoilio'>
        <Box Boxhead="Mobile app"/>
        <Box Boxhead="Web deveolpment"/>
        <Box Boxhead="Grahpic Design"/>
     </div>
     
     <div className='rowportfoilio1'>
        <Box Boxhead="Andrioud app"/>
        <Box Boxhead="Oreacl developer"/>
        <Box Boxhead="Phtyhon developer"/>
     </div>
      </div> 
      {/* endportfolio */}
      {/* out team */}
      <div className='ourteamsec'>
      <div class="ourteam">
        <p className='ourpera'>OUR TEAM</p>
        <h2>Our Top deidcated professionals.</h2>
      </div>
      <div className='ourteamcard' >
        <Box Name="Duglas walker" rank="SHIEF STAFF"/>
        <Box Name="Caroline Harrison" rank="FONDER & NANAGER"/>
        <Box Name="Safia Simpson" rank="WEB DESGINER"/>

     </div>
     </div>
      {/* end our team */}
      {/* our pricing */}
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
      {/* end section */}
      {/* section1 start */}
        <div className='section1'>
          <div> 
            <h1 className='sectionheading'>We're trusted by clients</h1>
          </div>
          <div className='secondcard'>
           <Card/>
           <Card/>
          </div>
        </div>
      {/* section1 end */}
      
    </>
  );
}
export default Home;