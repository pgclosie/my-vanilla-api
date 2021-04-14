module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "If you get here - you are on the wrong branch! :-)"
      }
    };
  };