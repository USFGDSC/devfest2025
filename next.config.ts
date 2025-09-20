import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos de imagem suportados - AVIF primeiro para melhor qualidade/tamanho
    formats: ['image/avif', 'image/webp'],
    
    // Configurações otimizadas para melhor qualidade
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Configurações do loader para melhor qualidade
    loader: 'default',
    
    // Permitir otimização de imagens externas se necessário
    remotePatterns: [
      // Adicione aqui se usar imagens de domínios externos
    ],
    
    // Manter otimização habilitada para compressão inteligente
    unoptimized: false,
    
    // Configurações adicionais para Sharp (motor de processamento)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
