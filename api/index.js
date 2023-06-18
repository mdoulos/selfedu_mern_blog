const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
    const {username, password} = req.body;
    res.json({requestData:{username, password}});
});

app.listen(4000);
// mongodb+srv://blog:6KmGWysOfus0w9O8@cluster0.7pxm9fk.mongodb.net/?retryWrites=true&w=majority