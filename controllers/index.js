const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const signUpRoutes = require('./signUpRoutes')

router.use('/',homeRoutes);
router.use('/login', loginRoutes);
router.use("/dashboard",dashboardRoutes);
router.use("/dashboard",dashboardRoutes);
router.use('/signUp',signUpRoutes);
module.exports = router;