INSERT INTO department (dept_name)
VALUES ("Finance"),
       ("Accounting"),
       ("HR"),
       ("Marketing"),
       ("Operations");


INSERT INTO roles (title, salary, dept_id)
VALUES ("Analyst", 120000, 1),
       ("Accountant", 100000, 2),
       ("Sales Rep", 100000, 4),
       ("HR Manager", 80000, 3),
       ("Operations Manager", 105000, 5),
       ("Hiring Manager", 65000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Fokas", 1, NULL),
       ("Jane", "Dough", 2, 1),
       ("Jorge", "Lopez", 3, NULL),
       ("Monica", "Lane", 4, NULL),
       ("Leo", "Flores", 5, 3),
       ("Molly", "Gibson", 6, 4),
       ("Mac", "Dorsey", 3, 6);