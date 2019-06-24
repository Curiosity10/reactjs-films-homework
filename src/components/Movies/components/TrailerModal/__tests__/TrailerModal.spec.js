import React from 'react';
import { create, act } from 'react-test-renderer';
import { JSDOM } from 'jsdom';
import ReactDOM from 'react-dom';
import TrailerModal from '..';

describe('TrailerModal component renders correctly', () => {
  beforeAll(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    ReactDOM.createPortal = jest.fn(element => element);
  });
  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });
  it('TrailerModal renders and unmount correctly', () => {
    const tree = create(<TrailerModal toggleModal={() => {}} />);
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
  it('Spinner inside modal renders correctly', () => {
    const tree = create(<TrailerModal toggleModal={() => {}} isLoading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Click outside modal works correctly', () => {
    const mockFn = jest.fn();
    const mockClick = jest.fn();
    const ContainerComponent = () => (
      <div>
        <button type="button" className="button" onClick={mockClick}>123</button>
        <TrailerModal toggleModal={mockFn} src="12345" />
      </div>
    );
    let tree;
    act(() => {
      tree = create(
        <ContainerComponent />,
      );
    });
    const event = new MouseEvent('mousedown', {});
    act(() => {
      mockClick();
      document.dispatchEvent(event);
    });
    expect(mockClick).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
