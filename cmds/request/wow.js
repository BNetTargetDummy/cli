#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
      command: 'wow <endpoint>',
      describe: 'World of Warcraft game API request to the Battle.net API',
      builder: (yargs) => yargs
        .commandDir('wow')
        .demandCommand(1),
      handler: (argv) => {
      }
    }
  ).argv;

module.exports = request;
