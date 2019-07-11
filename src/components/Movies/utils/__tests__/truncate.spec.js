import truncate from '../truncate';

describe('Truncate overview work correctly', () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

  it('Truncate overview if maxLength < textLength correctly', () => {
    expect(truncate(text, 10)).toEqual('Lorem ipsu...');
  });

  it('Not truncate overview correctly', () => {
    expect(truncate(text, 540)).toEqual(text);
  });

  it('Truncate without overview not break', () => {
    expect(truncate()).toEqual('');
  });
});
