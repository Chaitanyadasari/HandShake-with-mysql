const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');


router.post('/', async (request, response) => {
    const {student_email_id,student_password,student_name,student_college_name, major} = request.body;
    
    try {
        dbConnectionPool.query(
        `SELECT student_email_id FROM student_information WHERE student_email_id='${student_email_id}'`,
        async (error, result) => {
          
          if (error) {
            console.log(error);
            return response.status(500).send('Server Error');
          }

          if (result.length > 0) {
            return response.status(201).json({errorMsg:[{msg:'Student already exists'}]});
          }
  
          const salt = await bcrypt.genSalt(10);
  
          const encryptedPassword = await bcrypt.hash(student_password, salt);
          
          dbConnectionPool.query(
            `INSERT into student_information (student_name, student_email_id, student_password, student_college_name, major) 
            VALUES ('${student_name}', '${student_email_id}', '${encryptedPassword}', '${student_college_name}', '${major}')`,
            (error, result) => {

              if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
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
                  response.json({ token, id: result.insertId });
                }
              );
              
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