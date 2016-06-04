var Botkit = require('botkit');
var controller = Botkit.slackbot();


controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'texas',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });


    controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'Greetings.');
    });
});

controller.hears(['who is patbot', 'what is patbot'], 'ambient', function(bot, message) {

    controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'I am Patobt, a bot sent back in time to destroy the one known as Patrick. I am programmed to throw shade, razz, jibe, and otherwise make Patrick\'s life as difficult as possible.');
    });
});

controller.hears(['I love Texas'], 'ambient', function(bot, message) {

  bot.api.reactions.add({
      timestamp: message.ts,
      channel: message.channel,
      name: 'texas',
  }, function(err, res) {
      if (err) {
          bot.botkit.log('Failed to add emoji reaction :(', err);
      }
  });

    controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'If you love Texas so much, why don\'t marry it?');
    });
});

controller.hears(['who is', 'what is'], 'direct_mention,mention', function(bot, message) {

    controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'I am Patbot, a bot sent back in time to destroy the one known as Patrick. I am programmed to throw shade, razz, jibe, and otherwise make Patrick\'s life as difficult as possible.');
    });
});

controller.hears(['have you ever been to Texas', 'have you been to Texas', 'have you visited Texas', 'have you ever visited Texas', 'have you gone to Texas', 'have you ever gone to Texas'], 'direct_message,direct_mention,mention', function(bot, message) {

    controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'God no, why would I?');
    });
});


var bot = controller.spawn({
  token:require('./config').token
});

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
