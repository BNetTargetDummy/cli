#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'auction',
    describe: 'Fetch World of Warcraft auction house data',
    builder: (yargs) => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The auction house [realm]',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, realm } = argv;

      return blizzard.wow.aunction({ origin, locale, realm })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
