const {Router} = require('express');

const router = Router();

router.get('/',(req,res) => {
    const data = {
        "name": "Juan Guaba",
        "enterprise" : "novoscale"
    }
    res.json(data);
});

module.exports = router;