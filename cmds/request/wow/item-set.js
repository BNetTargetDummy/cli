#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'item',
    describe: 'Fetch a World of Warcraft item or set',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {item}',
            type: 'number',
            demand: true,
          },
          set: {
            alias: 's',
            describe: 'Whether this [id] is for a {set}',
            type: 'boolean',
            default: false,
          },
        });
    },
    handler: argv => {
      const { origin, locale, id, set } = argv;

      return blizzard.wow.item({ origin, locale, id, set })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
