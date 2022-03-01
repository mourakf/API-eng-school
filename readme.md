## API 

API based on [Alura ORM API Sequelize](https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql/)

### Technologies
* Express
* MySQL
* Sequelize
* Sequelize-cli <br>
### How
Change the config-example.json to config.json <br>
Install the dependecies: <br>
```
npm i
```
Run on terminal
```
npm run dev
```
### Requests

#### Route: People
*GET* 


*POST* <br>
/people \
\
Example of post request
```
{
    "names": "Alini",
    "active": true,
    "email": "alini@alini.com",
    "roles": "estudante"
}
```
*PUT*\
/people/:id