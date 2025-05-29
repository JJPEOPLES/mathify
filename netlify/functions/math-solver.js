// Netlify serverless function for solving math problems
exports.handler = async (event, context) => {
  try {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    // Parse the request body
    const data = JSON.parse(event.body);
    const { expression, operation } = data;

    if (!expression) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Expression is required' }),
      };
    }

    let result;

    // Handle different types of operations
    switch (operation) {
      case 'evaluate':
        // Simple evaluation (be careful with eval in production!)
        // In a real app, you'd use a safer math expression parser
        result = eval(expression);
        break;
      
      case 'factor':
        // This is a placeholder - in a real app, you'd implement proper factoring
        result = `Factoring of ${expression} would be implemented here`;
        break;
      
      case 'solve':
        // This is a placeholder - in a real app, you'd implement equation solving
        result = `Solution of ${expression} would be implemented here`;
        break;
      
      default:
        // Default to simple evaluation
        result = eval(expression);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        result,
        expression,
        operation,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while processing your request' }),
    };
  }
};