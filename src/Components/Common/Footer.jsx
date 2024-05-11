import fb from '../../assets/icons/fb-icon.png'
import x from '../../assets/icons/x-icon.png'
import insta from '../../assets/icons/instagram.png'
import logo from '../../assets/icons/logo-white.png'

const Footer = () => {
    return (
        <div className=" bg-blue-500 text-white w-full mt-10 lg:mt-16">
            <div className=" w-11/12 mx-auto py-10">
                <div className=" flex flex-col lg:flex-row justify-around gap-10 mb-6">
                    <div>
                        <h2 className=" text-4xl font-extrabold my-auto max-w-[575px]">Uniting hearts, transforming lives: Join us in making a difference today.</h2>
                    </div>
                    <div> 
                        <div className=' flex flex-row'>
                        <img src={logo} alt="" className=' w-10 h-10 mr-2'/>
                        <h3 className=" text-4xl font-bold mb-2">Unity Serve</h3>
                        </div>
                        <hr className=" w-36" />
                        <p className=" opacity-90 my-3 font-medium">127/A, Green Road, Dhanmondi <br />
                            Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className=" text-3xl font-bold mb-2">Find us</h3>
                        <hr className=" w-16" />
                        <ul className='mt-3 space-y-3'>
                            <li><a href="https://www.facebook.com"><img src={fb} alt="" className="w-8 h-8 bg-white rounded-full p-0.5" /></a></li>
                            <li><a href="https://twitter.com"><img src={x} alt="" className="w-8 h-8 bg-white rounded-full p-0.5" /></a></li>
                            <li><a href="https://www.instagram.com"><img src={insta} alt="" className="w-8 h-8 bg-white rounded-full p-0.5" /></a></li>
                        </ul>
                    </div>
                </div>
                <p className=" text-center">Copyright © 2024 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;