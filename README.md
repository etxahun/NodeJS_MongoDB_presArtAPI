# presArtAPI
MongoDB based REST API. 

### API

| URL                                      | HTTP Verb     | POST Body   | Result                    |
| ---------------------------------------- | ------------- | ----------- | ------------------------- |
| http://localhost:3000/api/presiones      | GET           | empty       | Returns all entries       |
| http://localhost:3000/api/presiones      | POST          | JSON String | New entry created         |
| http://localhost:3000/api/presiones/:id  | GET           | empty       | Reteurns single entry     |
| http://localhost:3000/api/presiones/:id  | PUT           | JSON String | Updates an existing entry |
| http://localhost:3000/api/presiones/:id  | DELETE        | empty       | Deletes existing entry    |

