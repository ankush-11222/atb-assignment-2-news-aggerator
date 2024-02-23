function getTokenFromHeaders(authHeader) {
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token from the authorization header
    const token = authHeader.substring(7); // 'Bearer ' is 7 characters long
    return token;
  } else {
    // If the authorization header is missing or has an invalid format, return null or handle the error as needed
    return null;
  }
}

module.exports = getTokenFromHeaders;
