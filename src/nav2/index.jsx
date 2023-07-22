import '../nav2/index.css'

import Pic from "../assets/img/1.png"





function First() {

    return (
        <section className='col-12'>
            <Left />
            <Right />



        </section>
    )
}


function Right() {
    return (
        <div className="rast col-6 col-md-7 col-lg-6 me-4">
            <ul className='d-none d-md-flex list1 col-10 col-lg-9 p-0 m-0'>
                <li className=''><a href="">چرا شاتل ؟</a></li>
                <li className=''><a href="">پشتیبانی</a></li>
                <li className='hov '><a href="">محصولات و خدمات</a>
                    <ul className='sub-ul p-0 m-0'>

                        <div className="ti col-2 ">
                            <h5>خدمات محتوا</h5>
                            <h6>نماوا</h6>


                        </div>
                        <div className="ti col-3 ">
                            <h5>خدمات همراه</h5>
                            <h6>شاتل موبایل</h6>
                            <h6 className='eng'>FMC</h6>
                        </div>
                        <div className="ti col-3">
                            <h5>خدمات تلفن</h5>
                            <h6>خدمات تلفن خانگی</h6>
                        </div>
                        <div className="ti col-4">
                            <h5>خدمات اینترنت پر سرعت</h5>
                            <h6>مجتمع های مسکونی </h6>
                            <h6 className='eng'>VDSL</h6>
                            <h6 className='eng'>ADSL+2</h6>
                        </div>

                    </ul>
                </li>
            </ul>
            <figure className='col-4 col-md-2'>
                <img src={Pic} alt="" />
            </figure>
        </div>

    )
}
function Left() {
    return (
        <div className="chap col-6 col-md-4 ps-3">
            <div className="pro ms-1 ms-md-5">ورود به مای شاتل<i class="bi bi-person"></i></div>
            <div className="search ms-1 ms-md-3"><i class="bi bi-search"></i></div>
        </div>

    )
    
}




export default First