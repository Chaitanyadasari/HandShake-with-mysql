const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.post('/', async (request, response) => {

    const {student_email_id, student_password} = request.body;

    console
    
    try {
        dbConnectionPool.query(
        `SELECT student_password, student_id FROM student_information WHERE student_email_id='${student_email_id}'`,
        async (error, result) => {
          console.log(result + "query result");
          
          if (error) {
            console.log(error);
            return response.status(500).send('Server Error');
          }

          if (result.length == 0) {
            //Entering here
            return response.status(201).json({errorMsg:[{msg:'Invalid Credentials'}]});
          }

          const isMatch = await bcrypt.compare(student_password, result[0].student_password);

          if (!isMatch) {
            return res.status(201).json({errorMsg:[{msg:'Invalid Credentials'}]});
          }

          const payload = {
            user: {
              id: student_email_id,
              usertype: 'student'
            }
          };

          jwt.sign(
            payload,
            "jwtSecret",
            {
              expiresIn: 600000
            },
            (error, token) => {
              if (error) {
                throw error;
              }
              response.json({token, id: result[0].student_id });
            }
          );
        }
      );
    } catch (error) {
      console.error(error.message);
      response.status(500).send('Server Error');
    }
  });
  
  module.exports = router;