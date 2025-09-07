import React from 'react';
import linkedin from "../assets/linkedinlogo.webp"
import x from "../assets/x.webp"
import instagram from "../assets/instagramlogo.png"
import tiktok from "../assets/tiktok.png"
import whatsapp from "../assets/whatsapplogo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10 text-center">
      <p>Crowbar Ltd. | +91-1234567890 | 123 Main St, City | info@crowbarltd.com</p>
      <p>© {new Date().getFullYear()} Crowbar Ltd.</p>
      <div className="flex justify-center mt-2 space-x-4">
        <img src={linkedin}  className='w-10 h-10 cursor-pointer'/>
        <img src={x}  className='w-10 h-10 cursor-pointer'/>
        <img src={instagram}  className='w-10 h-10 cursor-pointer'/>
        <img src={tiktok} className='w-10 h-10 cursor-pointer'/>
        <img src={whatsapp} className='w-10 h-10 cursor-pointer'/>
      </div>
    </footer>
  );
};

export default Footer;
