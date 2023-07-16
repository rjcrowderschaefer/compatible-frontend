import React, { useState } from 'react';
import { Col, Row } from 'antd';

function JobSearch() {
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");

    const url = `https://indeed-jobs-api.p.rapidapi.com/indeed-us/?offset=0&keyword=${keyword}&location=${location}`;
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_INDEED_API_KEY,
        'X-RapidAPI-Host': 'indeed-jobs-api.p.rapidapi.com'
  }
};

    async function fetchJobs(e) {
        e.preventDefault()
        try {
            const response = await fetch(url, options);
            const result = await response.json()
            setJobs(result);
            console.log(setJobs)
        } catch(err) {
            console.log(err)
        }
    };

    const handleChange = (e) => {
        setKeyword('');
        setLocation('');
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
                                <input type="text" placeholder="Enter keyword" name="keyword" id="keyword" onChange={(e) => setKeyword(e.target.value)} value={keyword} required/>
                                <input type="text" placeholder="Enter city or state" name="location" id="location"onChange={(e) => setLocation(e.target.value)} value={location} required/>
                                <input type="submit" id="search-button" value=">" />
                            </form>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row gutter={[25, 25]} justify="left" align="top">
                {
                    jobs && jobs.map((job, idx) => {
                        return (
                            <Col span={6}>
                            <div className="charging-card" key={idx}>
                                <h3>Job title: {job.job_title}</h3>
                                <h6>Company: {job.company_name}</h6>
                                <h6>Location: {job.job_location}</h6>
                                {/* <h6>More info: {job.job_url}</h6> */}
                            </div>
                        </Col>
                        )
                    })
                }
            </Row>
        </div>
        </>
    )
}

export default JobSearch;