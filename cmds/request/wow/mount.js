#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'mount',
    describe: 'Fetch World of Warcraft mount data',
    builder: yargs => {
      return yargs;
    },
    handler: argv => {
      const { origin, locale } = argv;

      return blizzard.wow.mount({ origin, locale })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
