const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.json({});
    res.send('<h1 style="color:#3ebb06">OK Express Start Success！</h1>');
});

app.listen(3001, () => {

    console.log('OK，监听3001端口！');
});