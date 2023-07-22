import '../nav1/index.css'



function First() {
    return (
        <nav className='col-12'>
            <div id='sub' className="sub-menu d-md-none  col-12 ">
                <ul className='col-12 '>
                    <li className='col-12'><i class="bi bi-plus-lg"></i><a className='p-3' href="">محصولات و خدمات</a></li>
                    <li className='col-12'><i class="bi bi-plus-lg"></i><a className='p-3' href="">پشتیبانی</a></li>
                    <div className="div mt-2 p-3"> چرا شاتل ؟</div>
                    <div className="div mt-2 p-3">راهکار های سازمانی</div>
                    <div id='eng' className="div mt-2 p-3">Enghlish</div>

                </ul>
            </div>
            <Left />
            <Right />
        </nav>


    )
}

function Left() {
    function mob() {
        document.getElementById('sub').style.top = '55px'
        document.getElementsByClassName('line')[0].style.display='none'
        document.getElementsByClassName('close')[0].style.display='flex'
    }
    function close() {
        document.getElementById('sub').style.top = '-500px'
        document.getElementsByClassName('line')[0].style.display='flex'
        document.getElementsByClassName('close')[0].style.display='none'

    }
    return (

        <div className="left col-12 col-md-7">
            <div className="list  ">
                <ul>
                    <li id='eng' className='d-none d-md-flex'><a href="">Enghlish</a></li>
                    <li className=''><a href="">شماره سراسری 9100000</a><i class="bi bi-telephone-fill"></i></li>
                    <li className='d-none d-md-flex'><a href="">ارتباط با ما </a></li>
                    <li className='d-none d-lg-flex'><a href="">فرصت های شغلی</a></li>
                    <li className='d-none d-md-flex'><a href="">درباره شاتل</a></li>
                </ul>
            </div>
            <div className="icon  col-8 d-md-none ">
                <div onClick={mob} className="line pe-5"><i class="bi bi-list"></i></div>
                <div onClick={close} className="close pe-5"><i class="bi bi-x-square"></i></div>
            </div>
        </div>



    )
}
function Right() {
    return (


        <div className="right d-none d-md-flex col-md-3">
            <ul className=' col-12'>
                <li ><a href="">کاربران سازمانی</a></li>
                <li ><a href="">کاربران خانگی</a></li>
            </ul>
        </div>


    )
}



export default First