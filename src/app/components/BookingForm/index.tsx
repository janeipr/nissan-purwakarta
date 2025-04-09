"use client";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CONFIG from "@/config";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    date: "",
    time: "",
    vehicleModel: "",
    serviceType: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hai! Saya ingin reservasi service di Nissan Purwakarta.
Berikut data diri Saya:
Nama: ${formData.name}
Alamat: ${formData.address}
No. Telepon: ${formData.phone}
Hari dan tanggal reservasi: ${formData.date}
Jam reservasi: ${formData.time}
Model Kendaraan: ${formData.vehicleModel}
Jenis Service: ${formData.serviceType}
Catatan Tambahan: ${formData.notes}`;

    window.open(
      `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(message)}`
    );
    onClose();
  };

  const isWeekday = (date: string) => {
    const day = new Date(date).getDay();
    return day !== 0 && day !== 6;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
      // Only update if it's a weekday
      if (isWeekday(value)) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get next available weekday
  const getNextWeekday = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = day === 6 ? 2 : day === 0 ? 1 : 0; // If Saturday +2, if Sunday +1, else +0
    today.setDate(today.getDate() + diff);
    return today.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-[30px] p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
        >
          <IoCloseOutline size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Booking Service Appointment</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap*
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                No. Telepon*
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alamat*
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Service* (Senin-Jumat)
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={getNextWeekday()}
                onKeyDown={(e) => e.preventDefault()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jam Service*
              </label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                min="08:00"
                max="17:00"
                step="1800"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent [&::-webkit-calendar-picker-indicator]:appearance-none [&::-webkit-time-picker-indicator]:appearance-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model Kendaraan*
              </label>
              <select
                name="vehicleModel"
                required
                value={formData.vehicleModel}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent"
              >
                <option value="">Pilih Model</option>
                <option value="Nissan Kicks">Nissan Kicks</option>
                <option value="Nissan Livina">Nissan Livina</option>
                <option value="Nissan Magnite">Nissan Magnite</option>
                <option value="Nissan Serena">Nissan Serena</option>
                <option value="Nissan Terra">Nissan Terra</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Service*
              </label>
              <select
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent"
              >
                <option value="">Pilih Service</option>
                <option value="Perawatan Berkala">Perawatan Berkala</option>
                <option value="Perbaikan Umum">Perbaikan Umum</option>
                <option value="Perbaikan AC">Perbaikan AC</option>
                <option value="Tune Up">Tune Up</option>
                <option value="Ganti Oli">Ganti Oli</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Catatan Tambahan
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portto-light-gold focus:border-transparent"
              placeholder="Jelaskan keluhan atau permintaan khusus Anda..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-portto-light-gold text-black rounded-full hover:shadow-[0_10px_20px_0_#FFE7C280] font-bold"
            >
              Kirim via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 