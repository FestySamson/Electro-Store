import './discount.css'

const Discount = ()=>{

    return(
        <div className="dis">
            <div className='discount'>
                <p className='big'>BIG DISCOUNT</p>
                <p className='g'>Google Pixel Smart phone</p>
                <p className='dd'>$350.00 </p>
                <div className='shop2' >
                    <a href="#">Shop Now</a>
                </div>
                <div className="discount-img">
                    <img src="/Images/phw.png" alt="" />
                    <img src="/Images/samsungtab.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Discount