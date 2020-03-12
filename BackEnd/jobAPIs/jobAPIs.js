const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.get('/', (request, response) => {
    console.log('i am here in api');
    try {
        dbConnectionPool.query(`SELECT * from jobs_information`, (error, result) => {
            if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
            }
            console.log(result);
            response.status(200).json({result});
        });
    } catch (error) {
      console.log(error);
      response.status(500).send('Server Error');
    }
});

router.get('/:job_id', (request, response) => {
    const job_id = request.params.job_id;
    try {
        dbConnectionPool.query(`SELECT * from jobs_information WHERE job_id=${job_id}`, (error, result) => {
            if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
            }
            console.log(result);
            response.status(200).json({result});
        });
    } catch (error) {
      console.log(error);
      response.status(500).send('Server Error');
    }
});

router.get('/postings/:company_id', (request, response) => {
    const company_id = request.params.company_id;
    try {
        dbConnectionPool.query(`SELECT * from jobs_information WHERE company_id=${company_id}`, (error, result) => {
            if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
            }
            console.log(result);
            response.status(200).json({result});
        });
    } catch (error) {
      console.log(error);
      response.status(500).send('Server Error');
    }
});

router.post('/:company_id', (request, response) => {
    const company_id = request.params.company_id;
    const {job_title, job_posting_date, job_application_deadline, job_location, 
        job_salary, job_description, job_requirements, job_category} = request.body;
    try {
        dbConnectionPool.query(`INSERT into jobs_information (job_title, job_posting_date, job_application_deadline, 
            job_location, job_salary, job_description, job_requirements, job_category, company_id) 
            VALUES ('${job_title}', '${job_posting_date}', '${job_application_deadline}', '${job_location}', 
            '${job_salary}', '${job_description}', '${job_requirements}', '${job_category}', ${company_id})`, (error, result) => {
            if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
            }
            console.log(result);
            response.status(200).json({result});
        });
    } catch (error) {
      console.log(error);
      response.status(500).send('Server Error');
    }
});

module.exports = router;