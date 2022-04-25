import {createPool} from "mysql2/promise";

const pool = createPool({
    host:'localhost',
    user:'root',
    password:'Irwin3218',
    port:3306,
    database: "cs"
})

export {pool};