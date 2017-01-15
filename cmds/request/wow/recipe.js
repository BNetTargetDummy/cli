#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'recipe',
    describe: 'Fetch a World of Warcraft Recipe',
    builder: (yargs) => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {recipe}',
            type: 'number',
          },
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {recipe}');
    },
    handler: argv => {
      const { origin, id } = argv;

      return blizzard.wow.recipe({ origin, id })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
