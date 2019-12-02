module.exports = {
  name: 'management-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/management-web',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
