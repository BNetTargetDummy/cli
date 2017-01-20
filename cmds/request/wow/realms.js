#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'realms',
    describe: 'Fetch World of Warcraft realm list and status',
    builder: yargs => {
      return yargs
        .options({
          realms: {
            alias: 'r',
            describe: 'One or more [realms] to fetch. Omit for all realms',
            type: 'array',
          },
        });
    },
    handler: argv => {
      const { origin, locale, realms } = argv;

      return blizzard.wow.realms({ origin, locale, realms })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
