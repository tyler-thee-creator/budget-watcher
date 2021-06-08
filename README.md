# Budget Watcher

> A budget app which allows users to set up a budget and log / track weekly spending

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> Start the server (port 3000) -
```sh
npm run server-dev
```
> Bundle with webpack (watch mode) -
```sh
npm run react-dev
```

### API Endpoints

- POST
> Endpoints:
> "/log" - logs a spend to the DB in form of: _{ description: STRING, amount: INTEGER }_
> "/budget" - adds a new budget item to the DB in teh form of: _{ description: STRING, amount: INTEGER }_
> Codes: will return 200 if successful, 500 if unsuccessful

- GET
> Endpoints:
> "/currentWeek" - retrieves the current week stats from the DB in form of - _[ { description: STRING, SUM(amount): INTEGER }, { description: STRING, SUM(amount): INTEGER } ]_
>"/budget" - retrieves the budget settings from the DB in the form of - _[ { id: INTEGER, description: STRING, amount: INTEGER }, { id: INTEGER, description: STRING, amount: INTEGER } ]_
> Codes: will return 200 if successful, 500 if unsuccessful

- DELETE
> Endpoints:
> "/log" - deletest the most recent item added to the log
> "/budget" - clears the budget settings entirely
> Codes: will return 200 if successful, 500 if unsuccessful

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```
