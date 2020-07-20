const express = require('express');

const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  patchBootcamp,
  deleteBootcamp,
} = require('./controlles/bootcamp.js');

module.exports = router;

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).patch(patchBootcamp).delete(deleteBootcamp);
