class ResponseUtil {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
    this.token = null;
  }

  setSuccess(statusCode, message, data, token) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.token = token;

    this.type = "Success";
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "Error";
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    this.token ? (result.userToken = this.token) : result;

    if (this.type === "Success") {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}

module.exports = ResponseUtil;
