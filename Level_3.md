# Level 3: Consuming REST APIs and Handling API Errors
## REST API Basics:

- RESTful APIs use HTTP methods to interact with resources (e.g., GET, POST, PUT, DELETE).
- JSON is commonly used to represent data in API responses.

### Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Handling API Errors:

- Check for HTTP status codes:
    - 200: OK
    - 400: Bad Request
    - 401: Unauthorized
    - 404: Not Found
    - 500: Internal Server Error
- Handle errors gracefully:
    - Display informative messages to the user.
    - Retry the request if possible.
    - Log errors for debugging.

### Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('API request failed with status: ' + response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
    // Display an error message to the user
  });
```

## Examples of Consuming APIs and Handling Errors
### Asynchronous Operations and Promises:

- Asynchronous operations (like fetching data from an API) don't block the main thread of execution.
- Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.


JavaScript:
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error('API request failed with status: ' + response.status));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Error Handling with a Custom Error Class:
- Create a custom error class to provide more context and information about the error.

### Example:
JavaScript:
```javascript
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new ApiError('API request failed with status: ' + response.status, response.status));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    if (error instanceof ApiError) {
      console.error('API Error:', error.message, 'Status:', error.status);
    } else {
      console.error('Unknown Error:', error);
    }
  });
```
