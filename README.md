# Node-Sequelize Heading

---
Este es una API desarrollada usando node, javascript, [dbeaver](https://dbeaver.com/) y [sequelize](https://sequelize.org/).

## Instalaciones

Estas son las siguientes instalaciones necesarias para realizar la API

### Nodemon

El comando para la instalcion de nodemon es:

```npm
npm install -g nodemon
```

### Instalacion de Sequelize

El comando para poder instalar sequelize dentro de nuestro proyecto:

```npm
npm install --save sequelize
```

#### ¿Que es un ORM?

### Instalacion de DBeaver

### Instalaciones de Postgres

## Realizar la Coneccion

Este es el codigo con el que cpmprobaremos la conexion entre nuestro editor y las base de datos:

```js
import app from './app.js';
import { sequelize } from './database/databse.js';

 async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established succedssfully');
        app.listen(4000);
        console.log('Server is listening on port', 4000);
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

main();
```
