class Config {
  header() {
    return {
      "Content-Type": "application/json",
      "x-functions-key": process.env.REACT_APP_AZURE_FUNCTIONS_KEY,
      "Access-Control-Allow-Credentials": true
    };
  }
}

export default Config;
