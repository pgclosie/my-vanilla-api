module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Goodbye from the API"
      }
    };
  };