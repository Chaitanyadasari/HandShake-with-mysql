const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.get('/', (request, response) => {
    try {
        dbConnectionPool.query(`SELECT * from student_information`, (error, result) => {
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
        dbConnectionPool.query(`SELECT * from student_information WHERE student_id=${student_id}`, (error, result) => {
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

router.post('/basicDetails/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    const {student_name, date_of_birth, city_name, 
        state_name, country_name, career_objective, 
        phone_number, student_email_id} = request.body;
  
    try {
      var query = `UPDATE student_information set student_name = '${student_name}', date_of_birth = '${date_of_birth}', 
      city_name = '${city_name}', state_name = '${state_name}', country_name = '${country_name}', 
      career_objective = '${career_objective}', phone_number = '${phone_number}', student_email_id = '${student_email_id}' 
      WHERE student_id = ${student_id}`;
      dbConnectionPool.query(query, (error, result) => {
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

router.get('/educationDetails/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    try {
        dbConnectionPool.query(`SELECT * from student_educational_details WHERE student_id=${student_id}`, async (error, result) => {
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

router.post('/educationDetails/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    const {institution_name, degree, major, passing_year, cgpa} = request.body;
  
    try {
      var query = `INSERT into student_educational_details (degree, institution_name, cgpa, major, passing_year, student_id) 
      VALUES ('${degree}', '${institution_name}', '${cgpa}', '${major}', '${passing_year}', ${student_id})`;

      dbConnectionPool.query(query, (error, result) => {
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

router.put('/educationDetails/:education_id', (request, response) => {
    const education_id = request.params.education_id;
    const {institution_name, degree, major, passing_year, cgpa} = request.body;
  
    try {
      var query = `UPDATE student_educational_details set institution_name = '${institution_name}',  
      degree = '${degree}', major = '${major}', passing_year = '${passing_year}', cgpa = '${cgpa}' 
      WHERE (education_id = ${education_id})`;

      dbConnectionPool.query(query, (error, result) => {
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

router.get('/experienceDetails/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    try {
        dbConnectionPool.query(`SELECT * from student_experience_details WHERE student_id=${student_id}`, async (error, result) => {
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

router.post('/experienceDetails/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    const {company_name, designation, starting_date, ending_date, company_location, work_summary} = request.body;
  
    try {
      var query = `INSERT into student_experience_details (company_name, designation, 
      starting_date, ending_date, work_summary, company_location, student_id) 
      VALUES ('${company_name}', '${designation}', '${work_summary}', '${company_location}', 
      '${starting_date}', '${ending_date}', ${student_id})`;

      dbConnectionPool.query(query, (error, result) => {
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

router.put('/experienceDetails/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    const {company_name, designation, starting_date, ending_date, company_location, work_summary, experience_id} = request.body;
  
    try {
      var query = `UPDATE student_experience_details set company_name = '${company_name}', designation = '${designation}', work_summary = '${work_summary}', company_location ='${company_location}', starting_date = '${starting_date}', ending_date = '${ending_date}' WHERE (student_id = ${student_id} AND experience_id = ${experience_id})`;
      dbConnectionPool.query(query, (error, result) => {
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

router.post('/skills/:student_id', (request, response) => {
    const student_id = request.params.student_id;
    const {skillSet} = request.body;
  
    try {
      var query = `UPDATE student_information set skillSet = '${skillSet}' WHERE student_id = ${student_id}`;
      dbConnectionPool.query(query, (error, result) => {
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
