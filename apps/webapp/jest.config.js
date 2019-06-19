module.exports = {
  name: 'fullstack-cnode',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fullstack-cnode',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
