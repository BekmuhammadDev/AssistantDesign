import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate ni import qiling
import { Header, Footer } from '@/components/layouts';
import { Checkbox } from "antd";
import AvatarImg from "../../assets/profile/avatar.png";
import UsbImg from "../../assets/img/USB.jpg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [RegisterData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        country: '',
    });

    const navigate = useNavigate(); // navigate funksiyasini chaqiring

    const handleChange = (e) => {
        setRegisterData({ ...RegisterData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { firstName, lastName, email, password, confirmPassword, phone, address, country } = RegisterData;
        if (!firstName || !lastName || !email || !password || !confirmPassword || !phone || !address || !country) {
            toast.error('Iltimos, barcha maydonlarni to\'ldiring!');
            return false;
        }
        if (password !== confirmPassword) {
            toast.error('Parollar mos kelmayapti!');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        localStorage.setItem('RegisterData', JSON.stringify(RegisterData));

        toast.success('Ma\'lumotlar muvaffaqiyatli saqlandi!');

        setTimeout(() => {
            navigate('/');
        }, 0);
    };

    return (
        <>
            <Header />

            <div className="container mx-auto max-w-[1440px] flex p-4 sm:p-0">
                <div className='hidden md:flex justify-center'>
                    <img src={UsbImg} alt="#" />
                </div>

                <div className="w-full sm:w-[734px] h-auto sm:h-[913px] p-4 sm:p-6 bg-[#F1F1F1] shadow-lg mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] font-bold sm:text-center text-[#2091F9] mb-4 ml-24 md:ml-0 sm:mb-[30px]">Register</h2>
                    <p className='text-sm sm:text-base text-center text-[#252B42] font-medium mb-2 sm:mb-[15px]'>
                        Most calendars are designed for teams. Slate <br className="hidden sm:block" />
                        is designed for freelancers
                    </p>
                    <div className='flex justify-center items-center mb-4 sm:mb-[37px]'>
                        <img src={AvatarImg} alt="#" />
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className='sm:flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Ism"
                                value={RegisterData.firstName}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Familiya"
                                value={RegisterData.lastName}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='sm:flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={RegisterData.email}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telefon raqami"
                                value={RegisterData.phone}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='sm:flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="text"
                                name="country"
                                placeholder="Davlat"
                                value={RegisterData.country}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Manzil"
                                value={RegisterData.address}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='sm:flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Parol"
                                value={RegisterData.password}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Parolni takrorlang"
                                value={RegisterData.confirmPassword}
                                onChange={handleChange}
                                className="block w-full sm:w-[253px] h-[48px] sm:h-[54px] rounded-[10px] p-4 sm:p-5 mb-3 sm:mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='flex justify-center items-center'>
                            <Checkbox className='mt-4 sm:mt-[38px]'>
                                Men barcha <a href="#" className='text-blue-600 font-medium text-base'>shartlarni</a> qabul qilaman
                            </Checkbox>
                        </div>

                        <div className='flex justify-center items-center mt-5'>
                            <button
                                type="submit"
                                className="w-full sm:w-[309px] h-[56px] sm:h-[64px] rounded-[10px] text-base font-bold bg-blue-500 text-white p-2"
                            >
                                Ro'yxatdan o'tish
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
            <ToastContainer /> {/* Toaster xabarnomasi */}
        </>
    );
};

export default Register;
