import React from 'react';
import './Top.css'

const Top = () => {
    return (
        <>
            <section className='top'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container d-flex align-items-center">
                        <div class="d-flex justify-content-center" id="navbarText">
                            <p>Logo</p>
                        </div>
                        <div class="d-flex justify-content-center" id="navbarText">
                            <p>Login</p>
                        </div>
                    </div>
                </nav>
            </section>
            <section className="middle">
                <div className="name">
                    <p>Bikroy.com</p>
                </div>
            </section>
            <section className="search-box">
                <div className="search-box-div d-flex justify-content-center pt-5 pb-5">
                    <form>
                        <label for="search">Search:</label>
                        <input type="text" id="search" name="search"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Top;