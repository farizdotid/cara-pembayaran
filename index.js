const express = require('express')
const app = express()
const port = 3000

const BankData = require('./data/BankData');
const BankBca = require('./data/BankBca');
const BankBni = require('./data/BankBni');
const BankBri = require('./data/BankBri');
const BankMandiri = require('./data/BankMandiri');
const BankCimb = require('./data/BankCimb');

app.use(express.static('./astro'));

app.get('/banks', (req, res) => {
    const dataList = BankData.generateDataList();
    res.json(dataList);
});

app.get('/bank/bca', (req, res) => {
    const dataList = BankBca.generateDataList();
    res.json(dataList);
})

app.get('/bank/bni', (req, res) => {
    const dataList = BankBni.generateDataList();
    res.json(dataList);
})

app.get('/bank/bri', (req, res) => {
    const dataList = BankBri.generateDataList();
    res.json(dataList);
})

app.get('/bank/mandiri', (req, res) => {
    const dataList = BankMandiri.generateDataList();
    res.json(dataList);
})

app.get('/bank/cimb', (req, res) => {
    const dataList = BankCimb.generateDataList();
    res.json(dataList);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})