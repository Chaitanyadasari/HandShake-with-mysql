const jwt = require('jsonwebtoken');

module.exports = function(request, response, next) {
  
  const token = request.header('x-auth-token');

  if (!token) {
    return response.status(401).json({msg:'No Token, Access Denied' });
  }

  try {
    const decoded = jwt.verify(token, "jwtSecret");
    request.user = decoded.user;
    next();
  } catch (e) {
    response.status(401).json({msg:'Token is not valid'});
  }
};
