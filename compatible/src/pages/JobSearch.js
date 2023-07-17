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
            <div className="charging-locations">
                <Row>
                    <Col span={14}>
                        <h2 className="page-title">List of jobs</h2>
                        <p className="page-intro">Search for your next job opportunity</p>
                    </Col>
                    <Col span={10}>
                        <div className="location-search">
                            <form onSubmit={fetchJobs}>
                                <label htmlFor="location"></label>
                                <input type="text" placeholder="Enter keyword" name="keyword" id="keyword" onChange={(e) => setKeyword(e.target.value)} value={keyword} required />
                                <input type="text" placeholder="Enter city or state" name="location" id="location" onChange={(e) => setLocation(e.target.value)} value={location} required />
                                <input type="submit" id="search-button" value=">" />
                            </form>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row gutter={[25, 25]} justify="left" align="top">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : jobs && jobs.length > 0 ? (
                        jobs.map((job, idx) => (
                            <Col span={6} key={idx}>
                                <div className="charging-card">
                                    <h3>Job title: {job.job_title}</h3>
                                    <h6>Company: {job.company_name}</h6>
                                    <h6>Location: {job.job_location}</h6>
                                    {/* <h6>More info: {job.job_url}</h6> */}
                                </div>
                            </Col>
                        ))
                    ) : (
                        <p>{errorMessages.location ? errorMessages.location : null}</p>
                    )}
                </Row>
            </div>
        </>
    )
}

export default JobSearch;