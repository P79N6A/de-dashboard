import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('de-dashboard dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const deDashboard = testDist ? require('../dist/de-dashboard') : require('../components'); // eslint-disable-line
    expect(Object.keys(deDashboard)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have de-dashboard.version', () => {
      const deDashboard = require('../dist/de-dashboard'); // eslint-disable-line
      expect(deDashboard.version).toBe(pkg.version);
    });
  }
});
