// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

// Mock plaiceholder
jest.mock('plaiceholder', () => ({
  getPlaiceholder: jest.fn().mockResolvedValue({
    base64: 'mock-base64-string',
    img: {
      src: 'mock-src',
      width: 100,
      height: 100,
    },
  }),
}));

// Mock @fancyapps/ui
jest.mock('@fancyapps/ui', () => ({
  Fancybox: {
    bind: jest.fn(),
    unbind: jest.fn(),
    close: jest.fn(),
  },
})); 