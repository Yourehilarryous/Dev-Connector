const express = require ('express')
const router = express.Router()


//@route    GET profile
//@desc     Test Route
//@access   Public
router.get('/', (req, res) => res.send('Profile Router'))

module.exports = router