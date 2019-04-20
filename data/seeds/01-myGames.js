
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, games: 'Persona 5', genre: 'RPG', releaseYear: 2017 },
        {id: 2, games: 'CounterStrike', genre: 'FPS', releaseYear: 2000 }
      ]);
    });
};
