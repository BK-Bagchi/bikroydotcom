import React from 'react'
import Navbar from '../Top/Navbar'
import Bottom from '../Bottom/Bottom'
import './MyProfile.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const MyProfile = () => {
    const history= useHistory()
    const myName= localStorage.getItem('displayName')
    const myProfilePicture= localStorage.getItem('photoURL')

  return (
    <>
        <Navbar/>
        <section className="profile container">
            <div className="edit-profile">
                <p className='text text-right' onClick={()=>{
                        history.push('/editProfile');
                        window.location.reload();
                    }}>Edit Profile</p>
            </div>
            <div className="profile-form">
                <form className="d-flex flex-column align-items-center">
                    <div className="profile-picture">
                        <img src={myProfilePicture} alt="User Profile Pic" />
                    </div>
                    <input type="text" value= {myName}/>
                    <input type="text" value="My Location" />
                    <input type="text" value="My contact"/>
                    <div class="about-user">
                        <p>About me</p>
                        <textarea name="description" value="It's all about me."></textarea>
                    </div>
                </form>
            </div>
        </section>
        <Bottom/>
    </>
  )
}

export default MyProfile
//rafce