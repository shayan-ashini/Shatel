import '../footer/index.css'


export default function First() {

    return (

        <footer className='col-12'>

            <Left />
            <Right />
            <Bottom />

        </footer>

    )

}



function Right() {
    return (
        <div className="righttt  col-12 col-md-6">

            <ul className='col-5'>
                <li>اخبار</li>
                <li>صدای مشتری</li>
                <li>مناقصه و مزایده</li>
                <li> سامانه رضایت سنجی</li>
            </ul>

            <ul className='col-5'>
                <li>ارتباط با ما</li>
                <li>فرصت های شغلی</li>
                <li>نمایندگان فروش</li>
                <li>سوالات متداول</li>
            </ul>

        </div>
    )
}
function Left() {
    return (
        <div className="lefttt  col-12 col-md-6">

            <div className="foot-icon d-flex mt-4 mt-md-0">
                <a href=""><i class="bi bi-telegram"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
            </div>
            <input dir="rtl" placeholder='آدرس ایمیل' className='mt-5 mb-5 col-8' type="text" name="" id="" />

            <div className="inp-btn d-none d-md-flex">عضویت در خبرنامه</div>



        </div>

    )
}
function Bottom() {
    return (
        <div className="bottom col-12">

            <h6 className='mt-3 mt-md-0 col-4'>شماره پروانه: 15-94-100 | سامانه 195</h6>
            <h6 className='mt-3 mt-md-0 col-6 pe-md-5 me-md-5'>1401 - کلیه حقوق مالکیت معنوی این وب‌سایت به گروه فناوری ارتباطات و اطلاعات شاتل تعلق دارد.</h6>


        </div>

    )
}


