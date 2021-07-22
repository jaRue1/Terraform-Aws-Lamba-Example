// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';

  //When you call Lambda functions via API Gateway's proxy integration, API Gateway passes the request information to your function via the event object. 
  //You can use information about the request in your function code.

  if (event.queryStringParameters && event.queryStringParameters['Name']) {
       responseMessage = 'Hello, ' + event.queryStringParameters['Name'] + '!';
     }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}
