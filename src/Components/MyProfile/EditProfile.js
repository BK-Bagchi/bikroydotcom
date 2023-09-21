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
                        history.push('/myProfile');
                        window.location.reload();
                    }}>My Profile</p>
            </div>
            <div className="profile-form">
                <form className="d-flex flex-column align-items-center">
                    <div className="profile-picture">
                        <img src={myProfilePicture} alt="User Profile Pic" />
                    </div>
                    <input type="text" value= {myName}/>
                    <input type="text" placeholder="Enter Your location" />
                    <input type="number" placeholder="Enter Your Contact"/>
                    <div class="about-user">
                        <p>Write something about yourself so that others can connect to you.</p>
                        <textarea name="description" placeholder="About you..."></textarea>
                    </div>
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
        </section>
        <Bottom/>
    </>
  )
}

export default MyProfile
//rafce