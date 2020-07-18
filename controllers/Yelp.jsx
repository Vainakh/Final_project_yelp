// const express = require('express');
// const router = express.Router();
// const Yelp = require('../models/Yekp.jsx');

// router.get('/', (req, res) =>{
//   Yelp.find({}, (err, foundYelp)=>{
//     res.json(foundYelp);
//   });
// });

// router.post('/', (req, res)=>{
//   Yelp.create(req.body, (err, createdYelp)=>{
//     res.json(createdYelp);
//   });
// });

// router.delete('/:id', (req, res)=>{
//   Yelp.findByIdAndRemove(req.params.id, (err, deletedYelp)=>{
//     res.json(deletedYelp);
//   });
// });

// router.put('/:id', (req, res)=>{
//   Yelp.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedYelp)=>{
//     res.json(updatedYelp);
//   });
// });

// module.exports = router;