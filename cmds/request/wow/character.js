#! /usr/bin/env node
const path = require('path');
const models = rootRequire('models');

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'character',
    describe: 'Fetch a World of Warcraft character',
    builder: yargs => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {character}',
            type: 'string',
            demand: true,
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {character}',
            type: 'string',
            demand: true,
          },
          fields: {
            alias: 'f',
            describe: 'A list of one or more [fields] belonging to the {character}',
            choices: ['profile', 'achievements', 'appearance', 'audit', 'feed', 'guild', 'hunterPets', 'items', 'mounts', 'pets', 'petSlots', 'professions', 'progression', 'pvp', 'quests', 'reputation', 'statistics', 'stats', 'talents', 'titles'],
            default: 'profile',
            array: true,
          },
        });
    },
    handler: argv => {

      const { origin, locale, realm, name, fields } = argv;
      const arguments = { origin, locale, realm, name, fields };
      console.log(arguments);
      RecentRequest.findAll({
        where: {
          command: 'character'
        }
      }).then(requests => {
        for(let request in requests) {
          let result = {};
          if(requests.hasOwnProperty(request) && request.arguments === arguments) {
            result = request.response;
          } else {
            blizzard.wow.character(fields, arguments)
              .then(response =>
                result = response.data,
                RecentRequest.create({
                  command: 'character',
                  arguments: arguments,
                  header: response.header,
                  body: response.body
                })
              )
              .catch(err => console.log(JSON.stringify(err.response.data)));
          }
        }
      });
    },
  }).argv;

module.exports = request;
