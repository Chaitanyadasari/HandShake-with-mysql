const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.get('/:company_id', (request, response) => {
    const company_id = request.params.company_id;
    try {
        dbConnectionPool.query(`SELECT * from application_information_table WHERE company_id=${company_id}`, (error, result) => {
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
        dbConnectionPool.query(`SELECT * from application_information_table WHERE job_id=${job_id}`, (error, result) => {
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

router.get('/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    try {
        dbConnectionPool.query(`SELECT * from application_information_table WHERE student_id=${student_id}`, (error, result) => {
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

router.post('/', (request, response) => {
    const {application_status, application_date, student_id, company_id, job_id} = request.body;
    try {
        dbConnectionPool.query(`INSERT into application_information_table (application_status, application_date, student_id,
            company_id, job_id) VALUES ('${application_status}', '${application_date}', '${student_id}', '${company_id}', ${job_id}`,
            (error, result) => {
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
    const {application_status, student_id} = request.body;
    try {
        dbConnectionPool.query(`UPDATE application_information_table set application_status='${application_status} WHERE company_id=${company_id} AND student_id=${student_id}`,
            (error, result) => {
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