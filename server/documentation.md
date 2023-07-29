## Endpoints

List of Available Endpoints:
- `POST /register`
- `POST /login`
- `POST /googleLogin`

### POST /register
#### Description
- Register to create a new user (role is admin by default)

#### Request
- Headers
    ```json
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
- Body
    ```json
    {
      "email": String,
      "password": String,
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
      "statusCode": 201,
      "id": Integer,
      "email": String
    }
    ```
_400 - Bad Request_
- Body
    ```json
    {
      "statusCode": 400,
      "message": [String]
    }
    ```

### POST /login
#### Description
- Login to an existing account

#### Request
- Headers
    ```json
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
- Body
    ```json
    {
      "email": String,
      "password": String,
    }
    ```
#### Response
_200 - OK_
- Body
    ```json
    {
      "statusCode": 200,
      "access_token": String,
      "email": String,
      "role": String
    }
    ```

_401 - Not Authorized_
- Body
    ```json
    {
      "statusCode": 401,
      "message": "Invalid username or email or password"
    }
    ```

### POST /googleLogin
#### Description
- Login to an existing google account

#### Request
- Headers
    ```json
    {
      "google_token": String
    }
#### Response
_200 - OK_
- Body
    ```json
    {
      "statusCode": 200,
      "access_token": String,
      "email": String,
      "role": String
    }
    ```

### Global Error
#### Response
_500 - Internal Server Error_
- Body
    ```json
    {
      "statusCode": 500,
      "error": {
        "message": "Internal Server Error"
      }
    }
    ```