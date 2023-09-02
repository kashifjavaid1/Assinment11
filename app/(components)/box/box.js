import './box.css'
function Box(props) {
    return (

        <>
            <div class="row">
                <div class="col">
                    <div class="silver-box"> <h3 className='propsheading'>{props.Boxhead}</h3>
                    <h3 className='cardrank'>{props.Name}</h3>
                    <p className='cardpera'>{props.rank}</p>
                    </div>
                </div>
            </div>

        </>


    );
}
export default Box;