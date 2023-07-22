import '../news/index.css'



export default function First() {
    return (
        <div className="news col-12 ">
            <Title />
            <Right />
            <Left />
        </div>
    )
}


function Title() {
    return (
        <div className="news-title col-12">
            <h2>اخبار و تازه ها</h2>
            <span className='mt-2'></span>
        </div>

    )
}


function Right() {
    return (
        <div className="news-1  col-12 col-md-6">

            <div className="content col-11 col-md-8 " dir='rtl'>
                <h6><i class="bi bi-calendar3"></i> شنبه، ۵ آذر ۱۴۰۱</h6>
                <h4>تخفیف‌های ویژه شاتل در آخرین ماه پاییز</h4>
                <span></span>
                <p className='pt-3'>ا توجه به استقبال مشتریان عزیز از شرایط ویژه خرید بسته‌های ترافیک، شاتل پیشنهادهای ویژه‌ای را برای خرید این بسته‌ها در آخرین ماه پاییز در نظر گرفته است. مشتریان فعلی شاتل می‌توانند از ۶ تا ۱۷ آذر ماه ۱۴۰۱ با مراجعه به پورتال کاربران شاتل (my.shatel.ir)  از تخفیف‌های ویژه زیر برای خرید بسته‌های ترافیک نقره‌ای ...</p>
                <div className="news-btn">بیشتر بخوانید</div>

            </div>

        </div>

    )
}
function Left() {
    return (
        <div className="news-2  col-12 col-md-6">
            <div className="content col-11 col-md-8 " dir='rtl'>
                <h6><i class="bi bi-calendar3"></i>چهارشنبه، ۲ آذر ۱۴۰۱</h6>
                <h4>تخفیف‌های ویژه شاتل در آخرین ماه پاییز</h4>
                <span></span>
                <p className='pt-3'>با توجه به استقبال مشتریان عزیز از شرایط ویژه خرید بسته‌های ترافیک، شاتل پیشنهادهای ویژه‌ای را برای خرید این بسته‌ها در آخرین ماه پاییز در نظر گرفته است. مشتریان فعلی شاتل می‌توانند از ۶ تا ۱۷ آذر ماه ۱۴۰۱ با مراجعه به پورتال کاربران شاتل (my.shatel.ir)  از تخفیف‌های ویژه زیر برای خرید بسته‌های ترافیک نقره‌ای ...</p>
                <div className="news-btn">بیشتر بخوانید</div>

            </div>

        </div>

    )
}