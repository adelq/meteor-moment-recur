Package.describe({
  summary: "A momentjs plugin for matching and generating recurring dates.",
  version: "1.0.5",
  git: "https://github.com/adelq/meteor-moment-recur.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('momentjs:moment@2.13.0');
  api.addFiles('lib/moment-recur/moment-recur.js');
});
