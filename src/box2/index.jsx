import '../box2/index.css'
import Pic13 from '../assets/img/13.png'
import Pic14 from '../assets/img/14.png'
import Pic15 from '../assets/img/15.png'
import Pic16 from '../assets/img/16.png'


function First(){
    return(
        <section id='bigbox2' className='col-12'>

            <div className="row  col-12 col-md-10 mt-5 mb-5 ">

                <Box/>

            </div>


        </section>
    )
}


function Box(){

    return(
        <>
        <div className="boxs2 col-12 col-md-2">
            <figure><img src={Pic13} alt="" /></figure>
            <span></span>
            <h4 className='pt-3'>باشگاه مشتریان</h4>
        </div>
        <div className="boxs2  col-12  col-md-2">
            <figure><img src={Pic14} alt="" /></figure>
            <span></span>
            <h4 className='pt-3'>برسی پوشش خدمات</h4>
        </div>
        <div className="boxs2  col-12  col-md-2">
            <figure><img src={Pic15} alt="" /></figure>
            <span></span>
            <h4 className='pt-3'>قیمت سرویس ها</h4>
        </div>
        <div className="boxs2  col-12  col-md-2">
            <figure><img src={Pic16} alt="" /></figure>
            <span></span>
            <h4 className='pt-3'>خرید آنلاین</h4>
        </div>
        </>
    )

}

export default First