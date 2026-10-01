const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];
router.get('/', (req, res) => {
    res.send(`Courses: ${courses.map(course => course.name).join(', ')}`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const course = courses.find(course => course.id === parseInt(id));
    if(course){
        res.send(`Course: ${course.name}, Description: ${course.description}`);
    }else{
        res.status(404).send("Course not found");
    }
});

module.exports = router;