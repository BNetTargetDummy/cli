#! /usr/bin/env node

const d3 = (resource, args) => {
  switch (resource) {
    case 'data':
      return [args.key, { origin: args.origin, locale: args.locale }];

    case 'era':
      return [{ origin: args.origin, locale: args.locale, id: args.id, leaderboard: args.leaderboard, token: args.token }];

    case 'profile':
      return [{ origin: args.origin, locale: args.locale, tag: args.tag, hero: args.hero }];

    case 'season':
      return [{ origin: args.origin, locale: args.locale, id: args.id, leaderboard: args.leaderboard, token: args.token }];
  }
};

const sc2 = (resource, args) => {
  switch (resource) {
    case 'data':
      return [args.key, { origin: args.origin, locale: args.locale }];

    case 'ladder':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];

    case 'profile':
      return [{ origin: args.origin, locale: args.locale, key: args.key, id: args.id, name: args.name, region: args.region }];
  }
};

const wow = (resource, args) => {
  switch (resource) {
    case 'achievement':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];

    case 'auction':
      return [{ origin: args.origin, locale: args.locale }];

    case 'boss':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];

    case 'challenge':
      return [{ origin: args.origin, locale: args.locale, realm: args.realm }];

    case 'character':
      return [args.fields, { origin: args.origin, locale: args.locale, realm: args.realm, name: args.name }];

    case 'data':
      return [args.key, { origin: args.origin, locale: args.locale }];

    case 'guild':
      return [args.fields, { origin: args.origin, locale: args.locale, realm: args.realm, name: args.name }];

    case 'item':
      return [{ origin: args.origin, locale: args.locale, id: args.id, set: args.set }];

    case 'mount':
      return [{ origin: args.origin, locale: args.locale }];

    case 'pet':
      return [args.key, { origin: args.origin, locale: args.locale, id: args.id, level: args.level, breed: args.breed, quality: args.quality }];

    case 'pvp':
      return [{ origin: args.origin, locale: args.locale, bracket: args.bracket }];

    case 'quest':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];

    case 'realms':
      return [{ origin: args.origin, locale: args.locale, realms: args.realms }];

    case 'recipe':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];

    case 'spell':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];

    case 'zone':
      return [{ origin: args.origin, locale: args.locale, id: args.id }];
  }
};

exports.d3 = d3;
exports.sc2 = sc2;
exports.wow = wow;
