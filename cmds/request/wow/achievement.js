#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'achievement',
    describe: 'Fetch a World of Warcraft achievement',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {achievement}',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, id } = argv;

      return blizzard.wow.achievement({ origin, locale, id })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
