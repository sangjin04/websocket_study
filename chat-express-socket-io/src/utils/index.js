const express = require('express');

const app = express();


const publicDirectoryPath = path.join(_dirname, '../public');
app.use(express.static(path.join(__dirname, '../public')))
const port = 4000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})