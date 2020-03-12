const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.post('/', async (request, response) => {

    const {company_email_id, company_password} = request.body;
    
    try {
        dbConnectionPool.query(
        `SELECT company_password, company_id from company_information WHERE company_email_id='${company_email_id}'`,
        async (error, result) => {
          
          if (error) {
            console.log(error);
            return response.status(500).send('Server Error');
          }

          if (result.length == 0) {
            return response.status(201).json({errorMsg:[{msg:'Invalid Credentials'}]});
          }

          const isMatch = await bcrypt.compare(company_password, result[0].company_password);

          if (!isMatch) {
            return res.status(201).json({errorMsg:[{msg:'Invalid Credentials'}]});
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
              response.json({token, id: result[0].company_id });
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