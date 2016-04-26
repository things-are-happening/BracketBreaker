use strict;
export let sessionSecret = {
  secret: '21d6f40cfb511982e4424e0e250a9557',
  resave: false,
  saveUninitialized: false,
  cookie:{
    httpOnly: false
  }
}

export let mongo = {
  // uri: `mongodb://tournament:abcd1234@ds011321.mlab.com:11321/tourney`
  uri: `mongodb://localhost:27017/tourney`
}