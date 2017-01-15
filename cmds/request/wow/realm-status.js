#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'realm-status',
    describe: 'Fetch a World of Warcraft Realm Status',
    builder: (yargs) => {
      return yargs
        .options({
          realms: {
            alias: 'r',
            describe: 'The [id] of the {item}',
            type: 'array',
          },
        });
    },
    handler: argv => {
      const { origin, realms } = argv;

      return blizzard.wow.realms({ origin, realms })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
