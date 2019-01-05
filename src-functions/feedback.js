exports.handler = async (event, context, callback) => {
  try {
    // Do not handle requests if the request
    // type is something other than `POST` or
    // if the request body is empty.
    if (event.httpMethod !== `POST` || !event.body) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({ status: `Bad Request` }),
      });
      return;
    }

    const {
      message,
      name,
    } = JSON.parse(event.body);

    // This is the place to handle
    // the submitted data.
    // For example:
    // await sendEmail({ message, name });
    // or
    // await saveToDb({ message, name });

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: `success` }),
    });
  } catch (error) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ status: `error` }),
    });
  }
};
