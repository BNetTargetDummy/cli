#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'pet-ability',
    describe: 'Fetch a World of Warcraft Achievement',
    builder: (yargs) => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {item/set}',
          },
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {pet-ability}');
    },
    handler: (argv) => {
      const { origin, realm } = argv;

      return blizzard.wow.item({ origin, realm })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
