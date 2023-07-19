import React, { useState } from 'react';
import { Col, Row } from 'antd';

function JobSearch() {
    const [jobs, setJobs] = useState([]);
    const [errorMessages, setErrorMessages] = useState({})
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const url = `https://indeed-jobs-api.p.rapidapi.com/indeed-us/?offset=0&keyword=${keyword}&location=${location}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_INDEED_API_KEY,
            'X-RapidAPI-Host': 'indeed-jobs-api.p.rapidapi.com'
        }
    };

    const validateSelect = async () => {
        setJobs([]);
        setErrorMessages({});

        try {
            setIsLoading(true);
            const response = await fetch(url, options);
            const result = await response.json()

            if (result.Error) {
                setErrorMessages({
                    ...errorMessages, location: 'Please make a valid selection that includes a keyword and city or state in the USA'
                });
                setIsLoading(false);
                return false;
            } else {
                setErrorMessages({});
                setJobs(result);
                setIsLoading(false);
                return true;
            };
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            return false;
        }
    };

    const fetchJobs = async (e) => {
        e.preventDefault();
        if (await validateSelect()) {
            try {
                setIsLoading(true);
                setJobs([]);
                setErrorMessages({});
                const response = await fetch(url, options);
                const result = await response.json();
                setJobs(result);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        }
    };

    const handleChange = (e) => {
        setKeyword('');
        setLocation('');
        setJobs([]);
        setErrorMessages({});
    }

    return (
        <>
            <div className="indeed-job-search">
                
                    
                        <h1 className="categories-header">List of jobs</h1>
                        <p className="listings-form-header">Search for your next job opportunity</p>
                    
                    
                        <div className="location-search">
                            <form onSubmit={fetchJobs}>
                                <label htmlFor="location"></label>
                                <input className="listing-edit-form-label keyword-field" type="text" placeholder="Enter keyword" name="keyword" id="keyword" onChange={(e) => setKeyword(e.target.value)} value={keyword} required />
                                <input className="listing-edit-form-label location-field" type="text" placeholder="Enter city or state" name="location" id="location" onChange={(e) => setLocation(e.target.value)} value={location} required /><br />
                                <input type="submit" className="submit-listing search-btn" value="Search" />
                            </form>
                        </div>
                    
                
                <hr />
                
                    {isLoading ? (
                        <p className="listings-form-header">Loading...</p>
                    ) : jobs && jobs.length > 0 ? (
                        jobs.map((job, idx) => (
                            <Col span={24} key={idx}>
                                <div className="job-search-card">
                                    <h4 className="listing-name">Job title: {job.job_title}</h4>
                                    <h6 className="listing-detail">Company: {job.company_name}</h6>
                                    <h6 className="listing-detail">Location: {job.job_location}</h6>
                                    <h6 className="listing-detail">Salary: {job.salary}</h6>
                                    <h6 className="listing-detail">More info: <a href={job.job_url} target="_new">Full details</a></h6>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <p>{errorMessages.location ? errorMessages.location : null}</p>
                    )}
                
            </div>
        </>
    )
}

export default JobSearch;