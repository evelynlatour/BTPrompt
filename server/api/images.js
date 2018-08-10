const router = require(`express`).Router();
const chalk = require(`chalk`);


// api/images
router.get(`/`, async (req, res, next) => {
  try {
    console.log(`gettin stuff`);
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).send(err);
  }
});

module.exports = router;
