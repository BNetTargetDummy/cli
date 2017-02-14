# TargetDummy CLI

The TargetDummy CLI fetches data from the Battle.net API and logs the JSON string to the console.

## Commands

The CLI is called with `td` or `targetdummy` and your Battle.net Developer API key available through your environment variables.

```
$ BATTLENET_CLIENT_ID=<apikey> td request <game> <resource> [--options]
```

All request commands accept `origin` (`-o`) and `locale` (`-l`) options.

  - `--origin, -o` String
    - choices: `us`, `eu`, `kr`, `tw`, `sea`, `cn`
    - default: `us`
  - `--locale, -l` - String
    - choices: depends on which `origin` is specified
    - default: the primary language code for the specified `origin`
    - see the [API documentation](https://dev.battle.net/docs/read/community_apis) for reference

## Diablo 3

```
$ td request d3 <resource>
```

### Commands

#### data

  - `--key, -k` String - the key of the data resource
    - choices: `artisan`, `follower`, `item`
  - `--id, -i` String - the ID of the data resource
    - artisan: `blacksmith`, `jeweler`, `mystic`
    - follower: `templar`, `scoundrel`, `enchantress`
    - item: the item ID

#### era

  - `--id, -i` Number - the era ID
  - `--leaderboard, -b` String - the leaderboard ID
  - `--token, -t` String - an authenticated user access token

#### profile

  - `--battletag, -b` String - the battletag of the user profile
  - `--hero, -i` Number - the hero ID

#### season

  - `--id, -i` Number - the era ID
  - `--leaderboard, -b` String - the leaderboard ID
    -
  - `--token, -t` String - an authenticated user access token

## Starcraft 2

```
$ td request sc2 <resource>
```

### Commands

#### data

  - `--key, -k` String - the key of the data resource
    - choices: `achievements`, `rewards`

#### ladder

  - `--id, -i` Number -  the ladder ID

#### profile

  - `--key, -k` String - the key of the profile resource
  - `--id, -i` Number - the user profile ID
  - `--name, -n` String - the user profile name
  - `--region, -r` [Number] - the user profile region
    - default: `1`

## World of Warcraft

```
$ td request wow <resource>
```

### Commands

#### achievement

  - `--id, -i` Number - the achievement ID

#### auction

  - `--realm, -r` String - the realm slug

#### boss

  - `--id, -i` [Number] - the boss ID
    - omit for all bosses

#### challenge

  - `--realm, -r` String - the realm slug

#### character

  - `--realm, -r` String - the realm of the character
  - `--name, -n` String - the name of the character
  - `--fields, -f` [Array] - one or more additional character data fields
    - choices: `profile`, `achievements`, `appearance`, `audit`, `feed`, `guild`, `hunterPets`, `items`, `mounts`, `pets`, `petSlots`, `professions`, `progression`, `pvp`, `quests`, `reputation`, `statistics`, `stats`, `talents`, `titles`
    - default: `profile`

#### data

  - `--key, -k` String - the key of the data resource
    - choices: `battlegroups`, `character:achievements`, `character:classes`, `character:races`, `guild:achievements`, `guild:rewards`, `guild:perks`, `item:classes`, `talents`, `pet:types`

#### guild

- `--realm, -r` String - the realm of the guild
- `--name, -n` String - the name of the guild
- `--fields, -f` [Array] - one more more additional guild data fields
  - choices: `profile`, `achievements`, `members`, `news`, `challenge`
  - default: `profile`

#### item

  - `--id, -i` Number - the item ID
  - `--set, -s` Boolean - whether the item ID is for a set

#### mount

  - no options

#### pet

  - `--key, -k` String - the key of the pet data
    - choices: `list`, `ability`, `species`, `stats`
    - default: `list`
  - `--id, -i` [String] - the pet abilities or species ID
  - `--level, -e` [Number] - the pet level
  - `--breed, -d` [Number] - the pet breed
  - `--quality, -q` [Number] - the pet quality

#### pvp

  - `--bracket, -b` String - the PvP bracket ID
    - choices: `2v2`, `3v3`, `5v5`, `rgb`

#### quest

  - `--id, -i` Number - the quest ID

#### realms

  - `--realms, -r` [Array] - One or more realm slugs
    - omit for all realms

#### recipe

  - `--id, -i` Number - the recipe ID

#### spell

  - `--id, -i` Number - the spell ID

#### zone

  - `--id, -i` [Number] - the zone ID
    - omit for all zones
