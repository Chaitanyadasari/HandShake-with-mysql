# PET PROJECT 1
  React - NOde - MYSQL- AWS application 


HandShake :

Tech Stack:

Cloud Native Architecture
The application is designed using cloud native technologies, specifically AWS. The frontend will be served as a static website from an S3 bucket. The authentication and authorization will be via third party social identity providers using AWS Cognito. The stateless NodeJS servers will be running as Docker containers in an AWS ECS cluster. To provide global latency-free access to the application.

Backend Services
We will be using NodeJs APIs to fetch the values from the DynamoDB database. Since our application will render information on run-time, the non-blocking asynchronous nature of NodeJS will help us get good performance.

Data Layer
The data will be stored and accessed from a  SQL database RDS.

Client Side
On the client side, we will make a ReactJS application. We are using ReactJS for the frontend as ReactJS is a light-weight library built over JavaScript, which doesn't re-render the entire DOM on change of components on the browser, rather it just re-renders the changed components. Hence ReactJS would improve application performance.

The frontend website is available at the following URL: http://13.52.238.134:3000/
