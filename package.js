Package.describe({
  name: "indymike:avatar",
  summary: "Consolidated user avatar template w/ namespaced css (twitter, facebook, gravatar, etc.)",
  version: "0.7.5",
  git: "https://github.com/indymike/meteor-avatar"
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.4.1', 'METEOR@1.0.2']);
  api.use(['templating', 'stylus', 'reactive-var'], ['client']);
  api.use(['underscore', 'jparker:gravatar@0.3.1'], ['client', 'server']);
  api.addFiles(
    [
      'template/avatar.html',
      'template/avatar.js',
      'template/avatar.styl'
    ],
    ['client']
  );
  api.addFiles(
    [
      'export.js',
      'helpers.js',
      'default.png'
    ],
    ['client', 'server']
  );
  api.export('Avatar');
});
