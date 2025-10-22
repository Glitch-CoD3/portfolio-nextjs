import Image from "next/image";
import photo from "../../../public/Images/img2.jpg"
import SocialContact from "../social-media/socialContact";
import Link from "next/link";


function Sidebar() {
    return (

        <div className="sidebar bg-gray-700 w-[200] h-[400] mt-8">
            <div className="profile">
                <Image src={photo} alt="Image" quality={100} width={120} />
                <h1>MD JUEL RANA</h1>
                <p>Software Developer</p>
                <div className="resume ">

                    <Link className="link" href="/">Resume</Link>

                </div>


            </div>
            <hr className='profile_hr' />

            <div className="contact pl-8">
                <div>
                    <p className='label'>Email</p>
                    <a className='value' href='mailto:juelr5351@gmail.com'>juelr5351@gmail.com</a>
                </div>

                <div>
                    <p className='label'>Phone</p>
                    <a className='value' href='tel:+880 1581-838244' >+880 1581-838244</a>

                </div>

                <div>
                    <p className='label'>Location</p>
                    <p className='value'>Sylhet-3100 , Bangladesh</p>
                </div>

                <hr className="contact_hr" />

                <SocialContact />

            </div>
        </div>

    )
}

export default Sidebar