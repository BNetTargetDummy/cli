#! /usr/bin/env node

const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const wow = (key, args) => {
  switch (key) {
    case 'achievement':
      return blizzard.wow.achievement({ origin: args.origin, locale: args.locale, id: args.id });

    case 'auction':
      return blizzard.wow.auction({ origin: args.origin, locale: args.locale });

    case 'boss':
      return blizzard.wow.boss({ origin: args.origin, locale: args.locale, id: args.id });

    case 'challenge':
      return blizzard.wow.challenge({ origin: args.origin, locale: args.locale, realm: args.realm });

    case 'character':
      return blizzard.wow.character(args.fields, { origin: args.origin, locale: args.locale, realm: args.realm, name: args.name });

    case 'data':
      return blizzard.wow.data(args.key, { origin: args.origin, locale: args.locale });

    case 'guild':
      return blizzard.wow.guild(args.fields, { origin: args.origin, locale: args.locale, realm: args.realm, name: args.name });

    case 'item':
      return blizzard.wow.item({ origin: args.origin, locale: args.locale, id: args.id, set: args.set });

    case 'mount':
      return blizzard.wow.mount({ origin: args.origin, locale: args.locale });

    case 'pet':
      return blizzard.wow.pet(args.key, { origin: args.origin, locale: args.locale, id: args.id, level: args.level, breed: args.breed, quality: args.quality });

    case 'pvp':
      return blizzard.wow.pvp({ origin: args.origin, locale: args.locale, bracket: args.bracket });

    case 'quest':
      return blizzard.wow.quest({ origin: args.origin, locale: args.locale, id: args.id });

    case 'realms':
      return blizzard.wow.realms({ origin: args.origin, locale: args.locale, realms: args.realms });

    case 'recipe':
      return blizzard.wow.recipe({ origin: args.origin, locale: args.locale, id: args.id });

    case 'spell':
      return blizzard.wow.spell({ origin: args.origin, locale: args.locale, id: args.id });

    case 'zone':
      return blizzard.wow.zone({ origin: args.origin, locale: args.locale, id: args.id });
  }
};

exports.wow = wow;
