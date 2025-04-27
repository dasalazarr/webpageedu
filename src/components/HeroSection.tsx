import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  qrCodeUrl?: string;
}

const HeroSection = ({
  title = "Revoluciona la Comunicación en tu Universidad con IA en WhatsApp",
  description = "Nuestro Asistente Inteligente transforma la experiencia estudiantil y optimiza la eficiencia administrativa, ofreciendo atención 24/7 y automatizando procesos clave a través de la plataforma más utilizada por los estudiantes.",
  ctaText = "Solicita una Demo",
  qrCodeUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=qrcode",
}: HeroSectionProps) => {
  return (
    <div className="w-full min-h-[700px] bg-gradient-to-br from-blue-50 to-white flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -left-10 bottom-20 w-40 h-40 rounded-full bg-blue-100 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left content */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg"
            >
              {ctaText}
            </Button>
            <p className="text-sm text-gray-600">
              o prueba nuestro asistente ahora
            </p>
          </div>
        </motion.div>

        {/* Right content - QR Code */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-center mb-4">
              <h3 className="font-medium text-gray-900">Prueba nuestro MVP</h3>
              <p className="text-sm text-gray-600">
                Escanea el código QR con tu cámara
              </p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <img
                src={qrCodeUrl}
                alt="Código QR para probar el asistente de WhatsApp"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 right-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="Logo de WhatsApp"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.5,
        }}
      >
        <Button
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
