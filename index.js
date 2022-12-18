const express = require('express')
const app = express()
const cors = require('cors')
const course = require('./data/Courses.json')
const details = require('./data/course.json')
const port = 5000


app.use(cors())

app.get('/', (req, res) =>{
    res.send("Happy zone data are coming soon")
})

app.get('/details', (req, res) =>{
    res.send(details)
})

app.get('/course', (req, res) =>{
    res.send(course)
})
app.get('/', (req, res) =>{
    res.send("Hello happy zone")
})
// Here we can load details data id 
app.get('/details/:id', (req, res) =>{
    const id = req.params.id;

        const detailsCourse = details.find(n => n.id === id)
        res.send(detailsCourse)
    
}) 

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selectCourse = course.find(c => c.id === id)
    res.send(selectCourse)
})
app.listen(port, () =>{
    console.log("Happy zone data is loading")
})

