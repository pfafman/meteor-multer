Package.describe({
  summary: "Add Multer to meteor",
  version: "0.1.0",
  git: "https://github.com/pfafman/meteor-multer.git"
});


Npm.depends({
  "multer": "0.1.6"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.export('multer');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['pfafman:multer', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});