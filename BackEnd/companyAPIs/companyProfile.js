const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConnectionPool = require('../config/sqlConnectionPool');

router.get('/:company_id', (request, response) => {
    const company_id = request.params.company_id;
    try {
        dbConnectionPool.query(`SELECT * from company_information WHERE company_id=${company_id}`, (error, result) => {
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
    const {company_name, company_location, company_description, company_contact} = request.body;
  
    try {
      var query = `UPDATE company_information set company_name = '${company_name}', company_location = '${company_location}', 
      company_description = '${company_description}', company_contact = '${company_contact}'
      WHERE company_id = ${company_id}`;
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