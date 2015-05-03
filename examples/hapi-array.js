var LandingStrip = require('../');

LandingStrip({
  username: 'hapijs-bot',
  emoji: ':hapi:',
  hook: 'https://hooks.slack.com/services/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',
  startTime: new Date(Date.now() - (1000 * 60 * 60 * 24 * 2)), // two days in the past
  onError: function(err) {
    console.error(err);
  },
  filter: [
    'accept',
    'ammo',
    'b64',
    'bassmaster',
    'bell',
    'boom',
    'bossy',
    'call',
    'catbox',
    'catbox-memcached',
    'catbox-memory',
    'catbox-mongodb',
    'code',
    'confidence',
    'content',
    'crumb',
    'cryptiles',
    'faketoe',
    'glue',
    'good',
    'good-broadcast',
    'good-console',
    'good-file',
    'good-http',
    'good-reporter',
    'good-udp',
    'h2o2',
    'hapi',
    'hapi-auth-basic',
    'hapi-auth-cookie',
    'hapi-auth-hawk',
    'heavy',
    'hoek',
    'inert',
    'items',
    'joi',
    'kilt',
    'lab',
    'lout',
    'mimos',
    'nigel',
    'peekaboo',
    'pez',
    'poop',
    'qs',
    'rejoice',
    'reptile',
    'scooter',
    'shot',
    'statehood',
    'subtext',
    'topo',
    'tv',
    'vise',
    'vision',
    'visionary',
    'wreck',
    'yar'
  ]
});
