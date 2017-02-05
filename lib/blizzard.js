#! /usr/bin/env node

const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const d3 = (command, args) => {
  switch (command) {
    case 'data':
      return blizzard.d3.data(args.key, { origin: args.origin, locale: args.locale });

    case 'era':
      return blizzard.d3.era({ origin: args.origin, locale: args.locale, id: args.id, leaderboard: args.leaderboard, token: args.token });

    case 'profile':
      return blizzard.d3.profile({ origin: args.origin, locale: args.locale, tag: args.tag, hero: args.hero });

    case 'season':
      return blizzard.d3.season({ origin: args.origin, locale: args.locale, id: args.id, leaderboard: args.leaderboard, token: args.token });
  }
};

const sc2 = (command, args) => {
  switch (command) {
    case 'data':
      return blizzard.sc2.data(args.key, { origin: args.origin, locale: args.locale });

    case 'ladder':
      return blizzard.sc2.ladder({ origin: args.origin, locale: args.locale, id: args.id });

    case 'profile':
      return blizzard.sc2.profile({ origin: args.origin, locale: args.locale, key: args.key, id: args.id, name: args.name, region: args.region });
  }
};

const wow = (command, args) => {
  switch (command) {
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

exports.d3 = d3;
exports.sc2 = sc2;
exports.wow = wow;
