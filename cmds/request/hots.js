#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'hots',
    describe: 'Perform a Heroes of the Storm request to the Battle.net API',
    builder: (yargs) => yargs,
    handler: (argv) => {
      console.log('Sorry game resource is not availabe yet!');
    },
  }).argv;

module.exports = request;
