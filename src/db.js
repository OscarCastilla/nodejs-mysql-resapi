import {createPool} from 'mysql2/promise' 
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD

} from './config.js'


export const pool= createPool({
    host:'containers-us-west-142.railway.app',
    user:'root',
    password:'GG0KA9vDM6zKJeMOtb5i',
    port:5888,
    database:'railway'
})


