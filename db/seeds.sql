INSERT INTO department (name)
VALUES  ('WebTech'),
        ('EA'),
        ('Support Center'),
        ('CTS');

INSERT INTO role (title, salary, department_id)
VALUES  ('Technical Product Analyst', 50000.00, 1),
        ('Front-End Developer', 65000.00, 2),
        ('Back-End Developer', 75000.00, 2),
        ('Technical Product Manager', 65000.00, 1),
        ('Support Technician', 45000.00, 3),
        ('Hardware Specialist', 50000.00, 4),
        ('Product Manager', 55000.00, 1),
        ('Data Analyst', 60000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Christina', 'Andreola', 1, 101),
        ('Mark', 'Vexelman', 2, 201),
        ('Eli', 'Matthews', 2, 201),
        ('John', 'Johnson', 3, 201),
        ('Peter', 'Peterson', 3, 201),
        ('Liz', 'Jameson', 4, 101),
        ('Grace', 'Anderson', 5, 301),
        ('David', 'Jackson', 5, 301),
        ('Mike', 'Davidson', 5, 301),
        ('Ellie', 'McVar', 5, 301),
        ('Josseline', 'Agularia', 6, 101),
        ('Kris', 'Kolody', 7, 101);
        

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;