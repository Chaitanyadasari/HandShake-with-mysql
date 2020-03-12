const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.get('/', (request, response) => {
    try {
        dbConnectionPool.query(`SELECT * from event_information`, (error, result) => {
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

router.get('/:event_id', (request, response) => {
    const event_id = request.params.event_id;
    try {
        dbConnectionPool.query(`SELECT * from event_information WHERE event_id=${event_id}`, (error, result) => {
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

router.get('/events/:company_id', (request, response) => {
    const company_id = request.params.company_id;
    try {
        dbConnectionPool.query(`SELECT * from event_information WHERE company_id=${company_id}`, (error, result) => {
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
    const {event_name, event_description, event_timing, event_from_date, 
        event_to_date, event_location, event_eligibility_criteria, event_major} = request.body;
    try {
        dbConnectionPool.query(`INSERT into event_information (event_name, event_description, event_timing,
             event_from_date, event_to_date, event_location, event_eligibility_criteria, event_major, company_id) 
             VALUES ('${event_name}', '${event_description}', '${event_timing}', '${event_from_date}', '${event_to_date}', 
             '${event_location}', '${event_eligibility_criteria}', '${event_major}', ${company_id})`, (error, result) => {
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

router.get('/registered/:event_id', (request, response) => {
    const event_id = request.params.event_id;
    try {
        dbConnectionPool.query(`SELECT * from registered_events WHERE event_id=${event_id}`, (error, result) => {
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

router.post('/registered/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    const {event_id, company_id} = request.body;
    try {
        dbConnectionPool.query(`INSERT into registered_events (event_id, student_id, company_id) VALUES (${event_id}, ${student_id}, ${company_id})`, (error, result) => {
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
