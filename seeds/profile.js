
exports.seed = function(knex, Promise) {
  return knex('profile').del()
    .then(function () {
      return knex('profile').insert([
        {id: 88802, user_id: 99901, star_sign: 'Leo'},
        {id: 88801, user_id: 99902, star_sign: 'Leo'},
        {id: 88803, user_id: 99903, star_sign: 'Leo'},
        {id: 88804, user_id: 99904, star_sign: 'Leo'},
        {id: 88805, user_id: 99905, star_sign: 'Leo'},
        {id: 88806, user_id: 99906, star_sign: 'Leo'},
        {id: 88807, user_id: 99907, star_sign: 'Leo'},
        {id: 88808, user_id: 99908, star_sign: 'Leo'},
        {id: 88809, user_id: 99909, star_sign: 'Leo'},
        {id: 88810, user_id: 99910, star_sign: 'Leo'},
        {id: 88811, user_id: 99911, star_sign: 'Leo'},
        {id: 88812, user_id: 99912, star_sign: 'Leo'},
      ]);
    });
};
