INSERT INTO department (name)
VALUES ('Programming'),
       ('Human Resources')

INSERT INTO role (title, salary, department_id)
VALUES ('Front-end programmer', 20000, 1)
       ('Back-end programmer', 20000, 1)
       ('Recruiting and Staffing', 10000, 2),
       ('Compensation and Benefits', 80000, 2)
       ('Training and Development', 15000, 2)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Fernando', 'Gutierrez', 1, NULL)
       ('Claudia', 'Villalobos', 1, 1)
       ('Arturo', 'Rodriguez', 2, 1)
