import React from 'react'

const Header = (props) => {
  return (
    <header>
        <section className='contact-us-section'>
            <h1>contact us</h1>
            <p>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 

            </p>
        </section>
        <section className='bottom-section'>
            <div className='form-container'> 
                <div className='buttons'>
                    <button>
                        <img src={props.messageIcon} alt="icon" />
                        VIA SUPPORT CHAT
                    </button>
                    <button>
                        <img src={props.telephoneIcon} alt="icon" />
                        VIA CALL
                    </button>
                    <button>
                        <img src={props.messageIcon} alt="icon" />
                        VIA EMAIL FORM
                    </button>
                </div>
                <form className='form-section'>
                    <label htmlFor="name">Name</label>
                    <input
                     id='name'
                     type="text"
                     name='userName'
                     onChange={props.handleEvent}
                     />
                    <br />
                    <label htmlFor="E-mail">E-mail</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="E-mail" 
                    onChange={props.handleEvent}
                    />
                    <br />
                    <label htmlFor="text"></label>
                    <textarea 
                    name="textarea" 
                    id="text" 
                    cols="30" 
                    rows="10"
                    onChange={props.handleEvent}
                    ></textarea>
                    <button className='form-button'>Submit</button>
                </form>
            </div>

            <img className='hero-img' src={props.heroImg} alt="Hero-Img" />
        </section>
    </header>
  )
}

export default Header