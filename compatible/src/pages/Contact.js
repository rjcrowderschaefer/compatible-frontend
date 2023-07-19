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
                <h1 className="categories-header">Get in touch</h1>
                <p className="listings-form-header">Have a question or want to give us some feedback? Please use the form below!</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        
                                <label className="listing-edit-form-label" htmlFor="name">Full Name:</label>
                                <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="What's your full name?"/>
                            
                                <label className="listing-edit-form-label" htmlFor="email">Email Address:</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="What's your email address?"/>
                            
                            <label className="listing-edit-form-label" htmlFor="feedback">What's on your mind?</label>
                            <textarea className="form-control" name="feedback" rows="3" onChange={handleChange} placeholder="We'd love to hear from you. What do you want to share?"/>
                            <button type="submit" className="button submit-contact-form">Submit</button>
                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUs;