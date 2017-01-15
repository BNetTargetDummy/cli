#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'zone',
    describe: 'Fetch a World of Warcraft Zone',
    builder: (yargs) => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {zone}',
            type: 'id',
          },
        });
    },
    handler: argv => {
      const { origin, id } = argv;

      return blizzard.wow.zone({ origin, id })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
