import Card from "../(components)/card/card";
import '../page.css'
function Blog() {
    return(
      <>
       <div className='section1'>
          <div> 
            <h1 className='sectionheading'>We're trusted by clients</h1>
          </div>
          <div className='secondcard'>
           <Card/>
           <Card/>
          </div>
        </div>
      </>
    );
  }
  export default Blog;