const { getBlogs, addBlogs, deleteBlogs } = require("../Controllers/blog.controller")

const router = require("express").Router()

router.get("/blogs", getBlogs)
router.post("/blogs", addBlogs)
router.delete("/blogs/:id", deleteBlogs)

module.exports  = router