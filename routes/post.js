const {
    Router
} = require('express');

const Post = require('../models/Post');
const User = require('../models/User');

const router = Router({
    strict: 'true'
});

// @ROUTE           >  /api/posts
// @DESC            >  GET ALL POSTS
// @ACCESS CONTROL  >  PUBLIC
router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find().sort({
            date: -1
        }).exec();
        if (!posts || posts.length < 1) return res.status(409).send('Posts not found!');
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


module.exports = router;