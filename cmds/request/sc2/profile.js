#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'prifle',
    describe: 'Fetch a Starcraft 2 Profile',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {profile}',
            type: 'number'
          },
          region: {
            alias: 'r',
            describe: 'The [region] of the {profile}',
            type: 'string'
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {profile}',
            type: 'string'
          }
        })
        .demandOption(['id','region','name'], 'Please provide at least the [id], [region], and [name] of the {data/achievements}');
    },
    handler: argv => {
      const {origin, id, region, name} = argv;

      return blizzard.d3.data({origin, id, region, name})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
