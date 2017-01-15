#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'hs',
    describe: 'HearthStone game API request to the Battle.net API',
    builder: (yargs) => yargs,
    handler: (argv) => {
      console.log('Sorry game resource is not avaialbe yet!');
    },
  }).argv;

module.exports = request;
