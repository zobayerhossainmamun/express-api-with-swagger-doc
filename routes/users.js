const express = require('express');
const router = express.Router();
const knex = require('../utils/db_handler');

router.post('/add', async function (req, res, next) {
  const data = req.body;

  const check_email = await knex('users').select('id').where('email', data.email).limit(1);
  if (check_email.length > 0) {
    return res.status(400).json({
      message: 'Email is already exist.'
    });
  }

  await knex('users').insert({
    name: data.name,
    email: data.email,
    password: data.password
  });
  res.status(200).json({ message: 'User added successfully.' });
});

router.get('/list', async function (req, res, next) {
  let limit = 10;
  let offset = 0;

  if (typeof req.query.page !== 'undefined') {
    offset = (Number(req.query.page) * limit);
  }
  let result = await knex('users').select('id', 'name', 'email').offset(offset).limit(limit);
  res.status(200).json({ message: 'User List.', result: result });
});

router.delete('/delete/:id', async function (req, res, next) {
  const check_user = await knex('users').select('id').where('id', req.params.id).limit(1);
  if (check_user.length === 0) {
    return res.status(400).json({
      message: `User ${req.params.id} not found.`
    });
  }

  await knex('users').where('id', req.params.id).del();
  res.status(200).json({ message: 'User has deleted.' });
});

router.put('/update/:id', async function (req, res, next) {
  const data = req.body;
  const check_user = await knex('users').select('id').where('id', req.params.id).limit(1);
  if (check_user.length === 0) {
    return res.status(400).json({
      message: `User ${req.params.id} not found.`
    });
  }

  await knex('users').update({
    name: data.name
  }).where('id', req.params.id);
  res.status(200).json({ message: 'User has updated.' });
});

module.exports = router;