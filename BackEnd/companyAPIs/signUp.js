const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.post('/', async (request, response) => {

    const {company_name, company_email_id, company_password, company_location} = request.body;
    
    try {
        dbConnectionPool.query(
        `SELECT company_email_id FROM company_information WHERE company_email_id='${company_email_id}'`,
        async (error, result) => {
          
          if (error) {
            console.log(error);
            return response.status(500).send('Server Error');
          }

          if (result.length > 0) {
            return response.status(201).json({errorMsg:[{msg:'Company already exists'}]});
          }
  
          const salt = await bcrypt.genSalt(10);
  
          const encryptedPassword = await bcrypt.hash(company_password, salt);
          
          dbConnectionPool.query(
            `INSERT into company_information (company_name, company_email_id, company_password, company_location) 
            VALUES ('${company_name}', '${company_email_id}', '${encryptedPassword}', '${company_location}')`,
            (error, result) => {

              if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
              }
  
              const payload = {
                user: {
                  id: company_email_id,
                  usertype: 'employer'
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