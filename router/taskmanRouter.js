const express = require ('express');
const router = express.Router();
const TASK = require ('../model/TaskmanModel');
const {create_route, all_route,specific_route,delete_route,update_route} = require('../controller/TaskmanController')


// create posts route
router.post('/create', create_route)

// get all posts route
router.get('/alltask', all_route)

// to get sepcific post
router.get('/specifictask/:postId',specific_route)

// to get delete post
router.delete('/delete/:postId',delete_route)

// to get update or edit post
router.patch('/update/:postId',update_route)

module.exports = router;
