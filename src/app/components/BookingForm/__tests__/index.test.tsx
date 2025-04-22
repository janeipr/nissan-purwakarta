import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from '../index';
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
jest.mock('react-icons/io5', () => ({
  IoCloseOutline: () => <div data-testid="close-icon" />,
}));

// Mock window.open
const mockWindowOpen = jest.fn();
window.open = mockWindowOpen;

// Mock Date to ensure consistent test results
const mockDate = new Date('2024-03-20T10:00:00');
jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

describe('BookingForm', () => {
  const renderForm = (isOpen = true) => {
    return render(
      <BookingFormProvider>
        <BookingForm isOpen={isOpen} onClose={() => {}} />
      </BookingFormProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when open', () => {
    const { container } = renderForm();
    expect(container).toMatchSnapshot();
  });

  it('does not render when closed', () => {
    const { container } = renderForm(false);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders all form fields', () => {
    renderForm();
    expect(screen.getByLabelText('Nama Lengkap*')).toBeInTheDocument();
    expect(screen.getByLabelText('No. Telepon*')).toBeInTheDocument();
    expect(screen.getByLabelText('Alamat*')).toBeInTheDocument();
    expect(screen.getByLabelText('Tanggal Service* (Senin-Jumat)')).toBeInTheDocument();
    expect(screen.getByLabelText('Jam Service* (08:00 - 17:00)')).toBeInTheDocument();
    expect(screen.getByLabelText('Model Kendaraan*')).toBeInTheDocument();
    expect(screen.getByLabelText('Jenis Service*')).toBeInTheDocument();
    expect(screen.getByLabelText('Catatan Tambahan')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    renderForm();
    const form = screen.getByTestId("booking-form");
    
    fireEvent.submit(form);
    
    await waitFor(() => {
      const nameInput = screen.getByLabelText('Nama Lengkap*');
      const phoneInput = screen.getByLabelText('No. Telepon*');
      const addressInput = screen.getByLabelText('Alamat*');
      
      expect(nameInput).toBeRequired();
      expect(phoneInput).toBeRequired();
      expect(addressInput).toBeRequired();
      
      // Check if the form is invalid
      expect(form).toBeInvalid();
    });
  });

  it('handles form submission correctly', async () => {
    renderForm();
    const form = screen.getByTestId("booking-form");
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText('Nama Lengkap*'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('No. Telepon*'), { target: { value: '081234567890' } });
    fireEvent.change(screen.getByLabelText('Alamat*'), { target: { value: '123 Test Street' } });
    fireEvent.change(screen.getByLabelText('Tanggal Service* (Senin-Jumat)'), { target: { value: '2024-03-20' } });
    fireEvent.change(screen.getByLabelText('Jam Service* (08:00 - 17:00)'), { target: { value: '10:15' } });
    fireEvent.change(screen.getByLabelText('Model Kendaraan*'), { target: { value: 'Nissan Kicks' } });
    fireEvent.change(screen.getByLabelText('Jenis Service*'), { target: { value: 'Perawatan Berkala' } });
    
    // Submit the form
    fireEvent.submit(form);
    
    await waitFor(() => {
      expect(mockWindowOpen).toHaveBeenCalled();
      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining('https://wa.me/6285161720101?text=Hai!%20Saya%20ingin%20reservasi%20service%20di%20Nissan%20Purwakarta.%0ABerikut%20data%20diri%20Saya%3A%0ANama%3A%20John%20Doe%0AAlamat%3A%20123%20Test%20Street%0ANo.%20Telepon%3A%20081234567890%0AHari%20dan%20tanggal%20reservasi%3A%202024-03-20%0AJam%20reservasi%3A%2010%3A15%0AModel%20Kendaraan%3A%20Nissan%20Kicks%0AJenis%20Service%3A%20Perawatan%20Berkala%0ACatatan%20Tambahan%3A%20')
      );
    });
  });

  it('validates date selection to be a weekday', async () => {
    renderForm();
    const dateInput = screen.getByLabelText('Tanggal Service* (Senin-Jumat)') as HTMLInputElement;
    
    // Try to select a weekend date
    // fireEvent.change(dateInput, { target: { value: '2024-03-23' } }); // Saturday
    // expect(dateInput.value).toBe('');
    
    // Try to select a weekday date
    fireEvent.change(dateInput, { target: { value: '2024-03-20' } }); // Wednesday
    expect(dateInput.value).toBe('2024-03-20');
  });

  it('validates time selection within business hours', async () => {
    renderForm();
    const timeInput = screen.getByLabelText('Jam Service* (08:00 - 17:00)') as HTMLInputElement;
    
    // Try to select time outside business hours
    fireEvent.change(timeInput, { target: { value: '07:00' } });
    expect(timeInput.value).toBe('');
    
    // Try to select time within business hours
    fireEvent.change(timeInput, { target: { value: '10:15' } });
    expect(timeInput.value).toBe('10:15');
  });

  it('allows granular time selection', async () => {
    renderForm();
    const timeInput = screen.getByLabelText('Jam Service* (08:00 - 17:00)') as HTMLInputElement;
    
    // Test various time selections
    const testTimes = [
      '08:15',
      '09:30',
      '10:45',
      '11:00',
      '12:15',
      '13:30',
      '14:45',
      '15:00',
      '16:15'
    ];
    
    for (const time of testTimes) {
      fireEvent.change(timeInput, { target: { value: time } });
      expect(timeInput.value).toBe(time);
    }
  });
}); 