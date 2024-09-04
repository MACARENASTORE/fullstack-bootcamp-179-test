const express = require('express');
const router = express.Router();

router.post("/new", (req, res) => {
    const {name}= req.body;
    console.log(req.body);
    if(!name){
        res.status(400).json({message: "Name is required"});
    }
});
router.get("/", (req, res) => {
    
});
router.get("/all/:id", (req, res) => {
    
});
router.patch("/all/:id", (req, res) => {
    
});
router.delete("/all/:id", (req, res) => {
    
});

module.exports = router;