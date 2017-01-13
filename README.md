# TargetDummy CLI

The TargetDummy CLI fetches data from the Battle.net API and logs the JSON string to the console.

### Commands

The CLI is called with `td` or `targetdummy`.

World of Warcraft Character
```
$ BATTLENET_CLIENT_ID=<apikey> td request character --origin us --realm amanthul --name charni
```

World of Warcraft Guild
```
$ BATTLENET_CLIENT_ID=<apikey> td request guild --origin us --realm amanthul --name charni
```
