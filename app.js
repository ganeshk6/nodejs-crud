const express = require('express');

// importing routers
const homeRouter = require('./routers/home');
const coursesRouter = require('./routers/courses');
const studentsRouter = require('./routers/students');


const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use('/', homeRouter);
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);


app.use('/{*splat}', (req, res) => {
    res.status(404).send('<h1>404 - Page not found</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
