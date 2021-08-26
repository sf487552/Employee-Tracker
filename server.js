const express = require("express");
const departmentDatabase = require("./db/departmentDB")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/api/department", (req, res) => {
    departmentDatabase.selectAllDepartments().then(([rows]) => {
        res.json(rows);
    })
});

app.get("/api/roles", (req, res) => {
    departmentDatabase.selectAllRoles().then(([rows]) => {
        res.json(rows);
    })
});

app.get("/api/employee", (req, res) => {
    departmentDatabase.selectAllEmployees().then(([rows]) => {
        res.json(rows);
    })
});

app.get("/api/department/:id", (req, res) => {
    const id = req.params.id;

    departmentDatabase.selectOneDepartment(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO MOVIE FOUND!")
            res.json(rows)
        }
    })
});

app.get("/api/roles/:id", (req, res) => {
    const id = req.params.id;

    departmentDatabase.selectOneRole(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO ROLE FOUND!")
            res.json(rows)
        }
    })
});

app.get("/api/employee/:id", (req, res) => {
    const id = req.params.id;

    departmentDatabase.selectOneEmployee(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO EMPLOYEE FOUND!")
        }
        res.json(rows)
    })
});

app.post("/api/add-department", (req, res) => {
    const {deptName} = req.body;

    departmentDatabase.addDepartment(deptName).then((data) => {
        console.log(data)
        res.json(data);
    });
});

app.post("/api/add-role", (req, res) => {
    const {deptRole} = req.body;

    departmentDatabase.addRole(deptRole).then((data) => {
        console.log(data)
        res.json(data);
    });
});

app.post("/api/add-employee", (req, res) => {
    const {deptEmployee} = req.body;

    departmentDatabase.addEmployee(deptEmployee).then((data) => {
        console.log(data)
        res.json(data);
    });
});

app.listen(PORT, () => console.log('RUNNING ON ${PORT}!'));