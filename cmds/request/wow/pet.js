#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'pet',
    describe: 'Fetch World of Warcraft pet data',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The [key] of the {pet} data',
            choices: ['list', 'ability', 'species', 'stats'],
            default: 'list',
            type: 'string',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {pet} ability or species',
            type: 'number',
            demand: true,
          },
          level: {
            alias: 'e',
            describe: 'The pet level',
            type: 'number',
          },
          breed: {
            alias: 'd',
            describe: 'The pet breed',
            type: 'number',
          },
          quality: {
            alias: 'q',
            describe: 'The pet quality',
            type: 'number',
          },
        });
    },
    handler: argv => {
      const { origin, locale, key, id, level, breed, quality } = argv;

      return blizzard.wow.pet(key, { origin, locale, id, level, breedId: breed, qualityId: quality })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
