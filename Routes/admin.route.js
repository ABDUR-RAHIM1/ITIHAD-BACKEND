const { getAdmin, loginAdmin, deleteAdmin, createModaretor } = require('../Controllers/admin.controller');

const router = require('express').Router()

router.get("/admins", getAdmin)
router.post("/modaretor-create", createModaretor)
router.post("/admin-login", loginAdmin)
router.delete("/admin-delete/:id", deleteAdmin)

module.exports = router;