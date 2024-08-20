const express = require('express');
const inquirer = require('inquirer');
const { Pool } = require('pg');
const Table = require('cli-table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const pool = new Pool (
    {
        user: 'postgres',
        password: 'DoubtingThomas12',
        host: 'localhost',
        database: 'departments_db'
    },

    console.log('Connected to the departments_db database.')
)

pool.connect();


const departmentTable = pool.query('SELECT * FROM department', function (err, res) {
        if (err) {
            console.err(err)
        } else {
            const table = new Table ( {
                head: Object.keys(res.rows[0]),
            });
            res.rows.forEach(row => {
                table.push(Object.values(row))
            });
            console.log(table.toString());
        }
    });

const roleTable = pool.query('SELECT * FROM role', function (err, res) {
    if (err) {
        console.err(err)
    } else {
        const table = new Table ( {
            head: Object.keys(res.rows[0]),
        });
        res.rows.forEach(row => {
            table.push(Object.values(row))
        });
        console.log(table.toString());
    }
});

const employeeTable = pool.query('SELECT * FROM employee', function (err, res) {
    if (err) {
        console.err(err)
    } else {
        const table = new Table ( {
            head: Object.keys(res.rows[0]),
        });
        res.rows.forEach(row => {
            table.push(Object.values(row))
        });
        console.log(table.toString());
    }
});

inquirer
    .prompt([
        {
            type: 'list',
            name: 'View Tables',
            message: 'Please select from the following:',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then((answers) => {
        if (answers === 'View all departments') {
            console.log(departmentTable)
        }
    })
    .catch((err) => {
        console.error(err)
    });


app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
