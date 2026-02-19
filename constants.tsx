import React from 'react';
import logoImg from './Cafe-maita/foto/logo.jpg';
import terreiroImg from './Cafe-maita/foto/graoterreio2.jpg';
import terroirImg from './Cafe-maita/foto/ChatGPT Image 18 de fev. de 2026, 21_56_08.png';
import torraImg from './Cafe-maita/foto/graopeneira2.jpg';

export const LOGO_SVG = (
  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#1B4332] bg-white shadow-inner flex items-center justify-center p-0.5">
    <img
      src={logoImg}
      alt="Logo Café Maitá"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
);

export const BRAND_NAME = "Café Maitá";
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "+5511970210989";

/**
 * Gera um link do WhatsApp otimizado para o dispositivo do usuário.
 * No Mobile: utiliza o protocolo whatsapp:// para abertura direta do app.
 * No Desktop: utiliza o link do WhatsApp Web para pular telas de confirmação.
 * Remove atrasos e garante compatibilidade com bloqueadores de popup.
 */
export const getWhatsAppLink = (message: string = "") => {
  const cleanPhone = CONTACT_PHONE.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return `whatsapp://send?phone=${cleanPhone}${message ? `&text=${encodedText}` : ''}`;
  }
  // Link direto para WhatsApp Web no Desktop
  return `https://web.whatsapp.com/send?phone=${cleanPhone}${message ? `&text=${encodedText}` : ''}`;
};

export const PRODUCTS = [
  {
    id: 'grains-500',
    name: 'Maitá Reserva Grãos',
    description: '100% Arábica, torra média com notes de chocolate e caramelo.',
    price: 'R$ 40,00',
    image: logoImg,
    type: 'Grãos'
  },
  {
    id: 'ground-500',
    name: 'Maitá Seleção Moído',
    description: 'Moagem média-fina ideal para métodos coados tradicionais.',
    price: 'R$ 40,00',
    image: logoImg,
    type: 'Moído'
  },
  {
    id: 'kit-presente',
    name: 'Kit Experiência Maitá',
    description: 'Pack com 2 variedades + caneca artesanal de cerâmica.',
    price: 'R$ 40,00',
    image: logoImg,
    type: 'Presente'
  }
];

export const FULL_PROCESS = [
  {
    title: 'Terroir Único',
    description: 'Cultivado a 750m de altitude, o Café Maitá aproveita a umidade vinda da Floresta Estadual e do Horto Florestal de Manduri.',
    details: 'A composição mineral rica do solo da nossa região oferece nutrientes que resultam em uma acidez cítrica refinada e corpo equilibrado.',
    image: terroirImg
  },
  {
    title: 'Cura em Terreiro',
    description: 'Após a colheita seletiva, os grãos descansam em terreiros por 15 a 20 dias.',
    details: 'Este processo natural permite que o açúcar da polpa migre para o interior do grão, acentuando a doçura.',
    image: terreiroImg
  },
  {
    title: 'Torra Mestre',
    description: 'Torra artesanal conduzida pelo feeling do mestre para garantir a máxima expressão de sabor e frescor.',
    details: 'Nossa torra média selecionada preserva as notas de origem sem o amargor excessivo de torras comerciais.',
    image: torraImg
  }
];
