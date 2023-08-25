const mysql = require('mysql')
const { promisify } = require('util')

const config = {
    host: 'bxxnocyhzwnxijrl58cc-mysql.services.clever-cloud.com',
    user: 'u4pmh4quydng095h',
    password: 't0qTKaixsQfkS9LSw8mo',
    database: 'bxxnocyhzwnxijrl58cc'
}

const con = mysql.createPool(config)

con.getConnection((err)=>{
    if(err) throw err
    console.log('database conectada')
})

con.query = promisify(con.query)

module.exports = con