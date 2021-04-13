module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "If you get here - MVF-1812 is complete - put your feet up and have a cuppa!"
      }
    };
  };