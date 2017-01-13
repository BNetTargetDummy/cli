#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: BATTLENET_CLIENT_ID });

const guild = yargs.command(
  'guild',
  'Fetch a World of Warcraft guild',
  yargs => {
    return yargs
      .options({
        origin: {
          alias: 'o',
          describe: 'The API endpoint to make the request to',
          choices: ['us', 'eu'],
          default: 'us',
        },
        realm: {
          alias: 'r',
          describe: 'The realm of the guild',
        },
        name: {
          alias: 'n',
          describe: 'The name of the guild',
        },
      })
      .demandOption(['realm', 'name'], 'Please provide at least the realm and name of the guild');
  },
  argv => {
    const { origin, realm, name } = argv;

    return blizzard.wow.guild(['profile'], { origin, realm, name })
      .then(response => {
        console.log(JSON.stringify(response.data));
      });
  }
).argv;

module.exports = guild;
