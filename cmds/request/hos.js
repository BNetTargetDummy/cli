#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
      command: 'hos',
      describe: 'Heroes of the Storm game API request to the Battle.net API',
      builder: (yargs) => yargs,
      handler: (argv) => {
        console.log('Sorry game resource is not availabe yet!')
      }
    }
  ).argv;

module.exports = request;
