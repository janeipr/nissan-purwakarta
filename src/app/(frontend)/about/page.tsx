"use client";

import Navbar from "@/app/components/Navbar";
import { FaCar, FaUsers, FaTools, FaHandshake } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-portto-black text-white">
      <Navbar />
        {/* Hero Section */}
      <section className="relative pt-[100px] pb-[50px]">
        <div className="container max-w-[1130px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="font-extrabold text-4xl xl:text-5xl">
              Tentang Nissan Purwakarta
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Kami adalah dealer resmi Nissan yang berkomitmen untuk memberikan layanan terbaik dan pengalaman berkendara yang luar biasa bagi pelanggan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-[100px] bg-white text-portto-black">
        <div className="container max-w-[1130px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl">Visi Kami</h2>
              <p className="text-lg text-gray-600">
                Menjadi dealer Nissan terdepan di Purwakarta yang memberikan pengalaman berkendara terbaik dan layanan berkualitas tinggi bagi setiap pelanggan.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="font-bold text-3xl">Misi Kami</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-portto-light-gold mt-1">•</span>
                  Menyediakan kendaraan Nissan berkualitas dengan harga kompetitif
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-portto-light-gold mt-1">•</span>
                  Memberikan layanan purna jual yang terbaik dan profesional
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-portto-light-gold mt-1">•</span>
                  Membangun hubungan jangka panjang dengan pelanggan
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-portto-light-gold mt-1">•</span>
                  Mengembangkan tim yang berdedikasi dan terampil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[100px]">
        <div className="container max-w-[1130px] mx-auto">
          <h2 className="text-center font-bold text-3xl mb-16">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-8 rounded-[30px] text-center">
              <div className="w-16 h-16 bg-portto-light-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCar className="text-2xl text-portto-black" />
              </div>
              <h3 className="font-bold text-xl mb-4">Kualitas</h3>
              <p className="text-gray-300">
                Kami hanya menyediakan kendaraan Nissan berkualitas tinggi dengan standar terbaik.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-[30px] text-center">
              <div className="w-16 h-16 bg-portto-light-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-2xl text-portto-black" />
              </div>
              <h3 className="font-bold text-xl mb-4">Pelayanan</h3>
              <p className="text-gray-300">
                Tim kami siap memberikan pelayanan terbaik dan solusi tepat untuk kebutuhan Anda.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-[30px] text-center">
              <div className="w-16 h-16 bg-portto-light-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTools className="text-2xl text-portto-black" />
              </div>
              <h3 className="font-bold text-xl mb-4">Profesionalisme</h3>
              <p className="text-gray-300">
                Setiap tim kami bekerja dengan profesional dan penuh dedikasi.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-[30px] text-center">
              <div className="w-16 h-16 bg-portto-light-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-2xl text-portto-black" />
              </div>
              <h3 className="font-bold text-xl mb-4">Integritas</h3>
              <p className="text-gray-300">
                Kami menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-[100px] bg-white text-portto-black">
        <div className="container max-w-[1130px] mx-auto">
          <h2 className="text-center font-bold text-3xl mb-16">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-[30px] text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-2">Nama Karyawan</h3>
                <p className="text-gray-600 mb-4">Jabatan</p>
                <p className="text-gray-500">
                  Deskripsi singkat tentang peran dan tanggung jawab dalam tim.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-[100px]">
        <div className="container max-w-[1130px] mx-auto">
          <div className="bg-white/10 p-12 rounded-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-bold text-3xl mb-6">Hubungi Kami</h2>
                <p className="text-gray-300 mb-8">
                  Kami siap membantu Anda dengan segala kebutuhan kendaraan Nissan Anda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portto-light-gold rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-portto-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Alamat</p>
                      <p className="text-gray-300">Jl. Contoh No. 123, Purwakarta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portto-light-gold rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-portto-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-gray-300">(0264) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portto-light-gold rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-portto-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">info@nissanpurwakarta.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-8">
                <h3 className="font-bold text-xl mb-6 text-portto-black">Jam Operasional</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Senin - Jumat</p>
                    <p className="font-medium">08:00 - 17:00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Sabtu</p>
                    <p className="font-medium">08:00 - 15:00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Minggu</p>
                    <p className="font-medium">Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 