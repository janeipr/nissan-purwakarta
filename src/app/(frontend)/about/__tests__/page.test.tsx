import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from '../page';
import { BookingFormProvider } from '@/app/context/BookingFormContext';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

// Mock react-icons
jest.mock('react-icons/fa', () => ({
  FaCar: () => <div data-testid="fa-car" />,
  FaUsers: () => <div data-testid="fa-users" />,
  FaTools: () => <div data-testid="fa-tools" />,
  FaHandshake: () => <div data-testid="fa-handshake" />,
}));

// Mock Icons
jest.mock('@/app/components/Icons', () => ({
  HeroBg: () => <div data-testid="hero-bg" />,
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <BookingFormProvider>
      {component}
    </BookingFormProvider>
  );
};

describe('AboutPage', () => {
  it('renders correctly', () => {
    const { container } = renderWithProvider(<AboutPage />);
    expect(container).toMatchSnapshot();
  });

  it('renders the main heading', () => {
    const { getByText } = renderWithProvider(<AboutPage />);
    expect(getByText('Tentang Nissan Purwakarta')).toBeInTheDocument();
  });

  it('renders the vision section', () => {
    const { getByText } = renderWithProvider(<AboutPage />);
    expect(getByText('Visi Kami')).toBeInTheDocument();
  });

  it('renders the mission section', () => {
    const { getByText } = renderWithProvider(<AboutPage />);
    expect(getByText('Misi Kami')).toBeInTheDocument();
  });

  it('renders the values section', () => {
    const { getByText } = renderWithProvider(<AboutPage />);
    expect(getByText('Nilai-Nilai Kami')).toBeInTheDocument();
  });

  it('renders the team section', () => {
    const { getByText } = renderWithProvider(<AboutPage />);
    expect(getByText('Tim Kami')).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    const { getByText } = renderWithProvider(<AboutPage />);
    expect(getByText('Hubungi Kami')).toBeInTheDocument();
  });
}); 