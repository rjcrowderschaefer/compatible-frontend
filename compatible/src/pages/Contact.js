import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { feedbackPostLoader } from '../apiCalls';

function ContactUs(props) {
    const navigate = useNavigate();
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        feedback: "",
    })
    
    // async function getContactInfo() {
    //     try {
    //         let myContactSubmissions = await feedbackLoader()
    //         myContactSubmissions = await myContactSubmissions.json();
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getContactInfo();
    // }, [])

    const handleChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            await feedbackPostLoader(contactForm)
            e.target.reset();
            navigate('/contact/thank-you');
        } catch(err) {
            console.log(err);
        }
    }
    
    
    return (
        <>
            <div className="contact">
                <h2 className="page-title">Get in touch</h2>
                <p className="page-info">Have a question or want to give us some feedback? Please use the form below!</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="What's your full name?"/>
                            </div>
                            <div className="col">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="What's your email address?"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label htmlFor="feedback"></label>
                            <textarea className="form-control" name="feedback" rows="3" onChange={handleChange} placeholder="We'd love to hear from you. What do you want to share?"/><br />
                            <button type="submit" className="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUs;