const express = require('express');
const router = express.Router();
// --------- Router Navigation Bar -----------
router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index');
});

router.get('/about', (req, res) => {
  console.log('Request for about page recieved');
  res.render('about');
});

router.get('/contact', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('contact');
});

// ---------- Router Destination ---------------

router.get('/visiting-Lyon', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('visiting-Lyon');
});
router.get('/visiting-Blaye', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('visiting-Blaye');
});
router.get('/visiting-Nantes', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('visiting-Nantes');
});

router.get('/visiting-Marseille', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('visiting-Marseille');
});
router.get('/visiting-Libourne', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('visiting-Libourne');
});

// ----------Router Activités Libourne-------------

router.get('/saintemilion', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('./activites/saintemilion');
});

router.get('/veloRail', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('./activites/baseAquatique');
});
router.get('/croisiere', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('./activites/circuitOeno');
});
router.get('/circuitOeno', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('./activites/musee');
});
router.get('/musee', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('./activites/veloRail');
});
router.get('/baseAquatique', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('./activites/saintemilion');
});

module.exports = router;