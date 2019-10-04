import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Hero from '../Hero';

describe('Hero component renders correctly', () => {
  it('Hero renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <Hero
        movie={{}}
        fetchVideoKey={() => {}}
        toggleModal={() => {}}
        isLoading={false}
      />,
    );
    const buttons = result.props.children.props.children[1].props.children[1];

    const mockWatchNow = jest.fn(buttons.props.children[0].props.handleClick);
    const mockShowInfo = jest.fn(buttons.props.children[1].props.handleClick);

    mockWatchNow();
    mockShowInfo();

    expect(result).toMatchSnapshot();
    expect(mockWatchNow).toHaveBeenCalled();
    expect(mockShowInfo).toHaveBeenCalled();
  });

  it('Hero renders correctly with rating', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <Hero
        movie={{ title: 'Test', id: '123', rating: 4 }}
        fetchVideoKey={() => {}}
        toggleModal={() => {}}
        isLoading={false}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('Hero renders correctly with loading', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <Hero
        movie={{}}
        fetchVideoKey={() => {}}
        toggleModal={() => {}}
        isLoading={false}
      />,
    );

    expect(result).toMatchSnapshot();
  });
});
