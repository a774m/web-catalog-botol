// components/WhatsappButton.tsx
import React from "react";

const WhatsappButton = () => {
  const phoneNumber = "6285779120377"; 
  const message = "Halo, saya tertarik dengan produk Anda.";
  
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-black hover:bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      aria-label="WhatsApp Button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12a11.8 11.8 0 0 0 1.64 6.05L0 24l6.2-1.63A11.79 11.79 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.22-3.48-8.52zM12 21.8a9.75 9.75 0 0 1-5-1.38l-.36-.21-3.68.96.98-3.58-.24-.37A9.8 9.8 0 1 1 21.8 12c0 5.42-4.38 9.8-9.8 9.8zm5.42-7.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07s-1.27-.47-2.42-1.5a9.2 9.2 0 0 1-1.7-2.12c-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.48-.67-.48h-.58c-.2 0-.52.07-.78.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.22 5.08 4.52.71.3 1.26.47 1.7.6.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.1-.1-.27-.16-.57-.3z" />
      </svg>
    </a>
  );
};

export default WhatsappButton;