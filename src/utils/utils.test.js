import * as Utils from './utils';

describe('getHocDisplayName', () => {
  it('should return combined display name from name', () => {
    const component = { name: 'Component' };
    const target = Utils.getHocDisplayName('withTest', component);
    expect(target).toEqual('withTest(Component)');
  });

  it('should return combined display name from displayName', () => {
    const component = { displayName: 'Component' };
    const target = Utils.getHocDisplayName('withTest', component);
    expect(target).toEqual('withTest(Component)');
  });
});

describe('compose', () => {
  it('should make a composition of a single function', () => {
    const target = Utils.compose(
      (x, y) => x + y
    );
    expect(target(1, 2)).toEqual(3);
  });

  it('should make a composition of multiple functions', () => {
    const target = Utils.compose(
      (x, y) => x + y,
      (x, y) => x * y
    );
    expect(target(1, 2)).toEqual(6);
  });
});