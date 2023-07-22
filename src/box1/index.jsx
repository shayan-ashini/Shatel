import '../box1/index.css'
import Pic7 from '../assets/img/7.png'
import Pic8 from '../assets/img/8.png'
import Pic9 from '../assets/img/9.png'
import Pic10 from '../assets/img/10.png'
import Pic11 from '../assets/img/11.png'
import Pic12 from '../assets/img/12.png'

function First(){
    return(
       
       <section id='bigbox' className='col-12'>

        <div className="row mt-5 mb-5 col-12 col-md-11">
            <Box/>
        </div>
        

       </section>
    )
}

function Box(){
    return(
        <>
        <div className="boxs col-11 col-md-3 m-3">
            <figure><img src={Pic7} alt="" /></figure>
            <h3 className='pt-2'>سیم کارت هوشمند شاتل موبایل</h3>
            <span></span>
            <p  dir='rtl'className='pt-3'>
			تنها اپراتور ارائه‌دهنده سیم‌کارت هوشمند با خدمات مکالمه، پیامک و اینترنت ۴G/LTE</p>
        </div>
        <div className="boxs col-11 col-md-3 m-3">
            <figure><img src={Pic8} alt="" /></figure>
            <h3 className='pt-2'>خدمات تلفن</h3>
            <span></span>
            <p className='pt-3'>نسل جدید خدمات تلفن با ویژگی منحصر به فرد</p>
        </div>
        <div className="boxs col-11 col-md-3 m-3">
            <figure><img src={Pic9} alt="" /></figure>
            <h3 className='pt-2'>خدمات اینترنت پر سرعت </h3>
            <span></span>
            <p className='pt-3'>
                بهترین راهکار برای دستیابی به اینترنت ثابت
            </p>
        </div>
        <div className="boxs col-11 col-md-3 m-3">
            <figure><img src={Pic10} alt="" /></figure>
            <h3 className='pt-2'>خدمات همگرایی ثابت و سیار</h3>
            <span></span>
            <p dir='rtl' className='pt-3'>
                تنها سرویس ترکیبی و همگرایی موبایل و ADSL2+
            </p>
        </div>
        <div className="boxs col-11 col-md-3 m-3">
            <figure><img src={Pic11} alt="" /></figure>
            <h3 className='pt-2'>خدمات مجتمع های مسکونی و تجاری</h3>
            <span></span>
            <p className='pt-3'>
                راهی امن برای دستیابی به اینترنت و برقراری ارتباط
            </p>
        </div>
        <div className="boxs col-11 col-md-3 m-3">
            <figure><img src={Pic12} alt="" /></figure>
            <h3 className='pt-2'>تماشای آنلاین فیلم و سریال</h3>
            <span></span>
            <p className='pt-3'> 
            خلق یک تجربه لذت بخش
            </p>
        </div>

        </>
    )
}


export default First