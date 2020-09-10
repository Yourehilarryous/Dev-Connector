const express = require ('express')
const router = express.Router()


//@route    GET post
//@desc     Test Route
//@access   Public
router.get('/', (req, res) => res.send('Post Router'))

module.exports = router