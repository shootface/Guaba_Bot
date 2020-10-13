const {Router} = require('express');
const appDiscord = require('../index');

const router = Router();

router.post('/say',(req,res) => {
    console.log(req);
    const {
        user,
        company,
        author,
        eventNum
    } = req.body;
    args = ["say",user,company,author,eventNum];
    console.log(args[1]);
    try {
        appDiscord.command(args);
        res.status(200).json({
            message: 'notification send'
        });
    } catch (error) {
        res.status(500).json({
            data: error
        });
    }
});

module.exports = router;