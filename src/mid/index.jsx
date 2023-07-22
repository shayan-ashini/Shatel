import '../mid/index.css'
import Pic18 from '../assets/img/18.webp'
import Pic19 from '../assets/img/19.webp'

function First() {
    return (

        <>
            <Second />
            <Third />
        </>


    )
}

<div className="div"></div>



function Second() {

    return (

        <section className='col-12 part1'>
            <div className="leftt mt-5 col-12 col-md-5 justify-content-center justify-content-md-end ">
                <figure><img src={Pic18} alt="" /></figure>
            </div>
            <div className="rightt col-10 col-md-5 me-md-5">
                <h3 className='pt-3'>باشگاه مشتریان شاتل</h3>
                <h6>فرصتی برای قدردانی از وفاداری مشتریان</h6>
                <span></span>
                <p dir='rtl' className='pt-3'>شاتل کلاب (باشگاه مشتریان) با هدف قدردانی از همراهی و وفاداری مشتریان گران‌قدر شاتل، راه‌اندازی شد. این باشگاه که فرصتی برای ارج نهادن به همراهی همیشگی و انتقال حس سپاس و قدردانی شاتل نسبت به مشتریان وفادار بوده است، با پیشنهادهای متنوع و جذاب در دسترس مشتریان خواهد بود.</p>
                <div className="btnn">اطلاعات بیشتر</div>
            </div>
        </section>

    )

}
function Third() {

    return (

        <section className='col-12 part2 mb-5 mt-5 mt-md-0'>

            <div className="rightt col-10 col-md-5 me-md-5">
                <h3 dir='rtl' className='pt-3'>خدمات اینترنت پرسرعت ثابت VDSL</h3>
                <h6>بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی</h6>
                <span></span>
                <p className='pt-3' dir='rtl'>در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.

                    شاتل ارایه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.

                </p>
                <div className="btnn">اطلاعات بیشتر</div>
            </div>

            <div className="leftt mt-5 col-12 col-md-5 justify-content-center justify-content-md-end ">
                <figure><img src={Pic19} alt="" /></figure>
            </div>
        </section>

    )

}

export default First