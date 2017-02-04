#! /usr/bin/env node

const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const wow = (key, args) => {
  switch (key) {
    case 'character':
      return blizzard.wow.character(args.fields, { origin: args.origin, locale: args.locale, realm: args.realm, name: args.name });

    case 'guild':
      return blizzard.wow.guild(args.fields, { origin: args.origin, locale: args.locale, realm: args.realm, name: args.name });
  }
};

exports.wow = wow;
