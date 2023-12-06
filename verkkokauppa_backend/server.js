require('dotenv').config()
const mysql = require('mysql2/promise')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = multer({ dest: "uploads/" });

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dateStrings: false,
    timezone: '+00:00'
}

const port = process.env.DB_PORT

app.get('/products', async (req, res) => {
    let connection;

    const generateDynamicQuery = (filters) => {
    const conditions = []
    const values = []

      for (const filter in filters) {
          if (filters.hasOwnProperty(filter) && filters[filter] !== undefined && filters[filter] !== '') {
            let condition
            let filterValue

            if (filter === 'hinta') {
              const numericValues = filters[filter].split('-').map((val) => parseFloat(val.replace(/[^\d.]/g, '')))

              if (filters[filter].includes('Yli')) {
                condition = 'hinta > ?'
                filterValue = numericValues[0]
              } else if (filters[filter].includes('Alle')) {
                condition = 'hinta < ?'
                filterValue = numericValues[0]
              } else {
                condition = 'hinta BETWEEN ? AND ?'
                filterValue = numericValues.length === 1 ? numericValues[0] : numericValues
                const rangeValues = filters[filter].split('-').map(val => parseFloat(val.replace(/[^\d.]/g, '')))
                filterValue = rangeValues.length === 1 ? rangeValues[0] : rangeValues

              }
            } else {
              condition = `${filter} = ?`
              filterValue = filters[filter]
            }
              conditions.push(condition)
              values.push(filterValue)
          }
      }

      if (conditions.length === 0) {
          return { query: '', values: [] }
      }

      return {query: `WHERE ${conditions.join(' AND ')}`, values }
  }

    try {
      connection = await mysql.createConnection(conf)
      const { merkki, korimalli, vari, kayttovoima, hinta } = req.query
      const { query:  dynamicQuery, values } = generateDynamicQuery({ merkki, korimalli, vari, kayttovoima, hinta})

      let result

        if (dynamicQuery !== '') {
        const filterQuery = `SELECT * FROM product ${dynamicQuery}`

        result = await connection.execute(filterQuery, [].concat(...values))

        } else {
        result = await connection.execute('SELECT * FROM product');
        }

      const filteredProducts = result[0];

      res.json(filteredProducts)
    } catch (err) {
      res.status(500).json({ error: err.message })
    } finally {
        if (connection)
          await connection.end()
    }
})

app.get('/filter-options/:column', async (req, res) => {
  let connection
  const createFilterQuery = (column) => `SELECT DISTINCT ${column} FROM product`

  try {
    connection = await mysql.createConnection(conf)
    const { column } = req.params

    const query = createFilterQuery(column)

    const [result] = await connection.execute(query)

    res.json(result.map((row) => row[column]))
  } catch (err) {
    res.status(500).json({ error: err.message })
  } finally {
    if (connection) {
      await connection.end()
    }
  }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

/**
 * Registers user. Supports urlencoded and multipart
 */
app.post('/register', upload.none(), async (req,res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const uname = req.body.username;
  const pw = req.body.pw;

  try {
      const connection = await mysql.createConnection(conf);

      const pwHash = await bcrypt.hash(pw, 10);

      const [rows] = await connection.execute('INSERT INTO customer(first_name,last_name,username,pw) VALUES (?,?,?,?)',[fname,lname,uname,pwHash]);

      res.status(200).end();

  } catch (err) {
      res.status(500).json({ error: err.message });
  }

});

/**
* Checks the username and password and returns jwt authentication token if authorized. 
* Supports urlencoded or multipart
*/
app.post('/login', upload.none(), async (req, res) => {
  const username = req.body.username;
  const pw = req.body.pw;

  try {
      const connection = await mysql.createConnection(conf);

      const [rows] = await connection.execute('SELECT pw FROM customer WHERE username=?', [username]);

      if(rows.length > 0){
          const isAuth = await bcrypt.compare(pw, rows[0].pw);
          if(isAuth){
              const token = jwt.sign({username: username}, 'mysecretkey');
              res.status(200).json({jwtToken: token});
          }else{
              res.status(401).end('User not authorized');
          }
      }else{
          res.status(404).send('User not found');
      }

  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});
