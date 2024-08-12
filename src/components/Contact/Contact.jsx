import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "caec2623-0fb8-452a-b407-dca77f01cb4a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(data.message);
        }
    };


    return (
        <div>
            <div className='contact'>
                <div className="contact-col">
                    <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
                    <p>
                        Feel free to reach out through contact Form or find our contact information below. We’re dedicated to ensuring your experience with us is nothing short of exceptional, and we’re here to assist with any questions or concerns you may have.
                    </p>
                    <ul>
                        <li><img src={mail_icon} alt="" />PlenitudeContact@gmail.com</li>
                        <li> <img src={phone_icon} alt="" /> +212 123-456-7890</li>
                        <li><img src={location_icon} alt="" />6ème étage Imm El youbia, Ave Allal Ben Abdellah, Fes 30000, Morocco</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>
                            Your name
                        </label>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <label>
                            Phone Number
                        </label>
                        <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                        <label>
                            Write your messages here
                        </label>
                        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                    </form>
                    <span>
                        {result}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact
