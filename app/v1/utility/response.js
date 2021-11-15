const build_response = (status, message, data) => {
    return { status: status, message: message, data: data };
  };
  module.exports = build_response;