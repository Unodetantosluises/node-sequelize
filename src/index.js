import app from './app.js';
import { sequelize } from './database/database.js';

import './models/Project.js'
// import './models/Task.js'

 async function main() {
    try {
        await sequelize.sync({ force: true});
        app.listen(4000);
        console.log('Server is listening on port', 4000);
    } catch (error) {
        console.error('Unable to connect to the databse:', error)
    }
 }

// async function main() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established succedssfully');
//         app.listen(4000);
//         console.log('Server is listening on port', 4000);
//     } catch (error) {
//         console.error('Unable to connect to the database:', error)
//     }
// }

main();