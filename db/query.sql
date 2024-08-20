SELECT *
FROM role 
JOIN department ON role.department_id = role.id;

SELECT *
FROM employee
JOIN role ON employee.role_id = employee.id;