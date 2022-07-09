### 1. Install dependencies and run application
```
npm install
npm run start:dev
```
### 2. Create new user
### Mutation register
```graphql
mutation Register($firstName: String, $lastName: String, $password: String, $email: String) {
  register(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
    id
    firstName
    lastName
    password
    email
  }
}
```
### Example user (use in password min 8 symbols)
```json
{
    "firstName": "Test",
    "lastName": "User",
    "password": "1234567890",
    "email": "testmail@mail.com"
}
```

### 3. Receive jwt token to get access to all queries and mutations
### Mutation jwt
```graphql
mutation Register($email: String, $password: String) {
  jwt(email: $email, password: $password) {
    jwt
  }
}
```
### Example request (use credentials from previous request or from existing user from your database)
```json
{
  "password": "1234567890",
  "email": "testmail@mail.com"
}
```
### 4. Open browser and run graphQL studio

```
http://localhost:4000/
```
#### Press Query your server

### 5. Use queries and mutations in appolo studio

