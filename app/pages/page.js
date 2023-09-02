import '../page.css'
import Box from '../(components)/box/box';
function Pages() {
    return(
        <>
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

        </>
    );
}
export default Pages;