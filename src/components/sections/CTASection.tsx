"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Play, 
  ArrowRight, 
  CheckCircle,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Setup en 24 horas"
    },
    {
      icon: TrendingUp,
      text: "ROI visible en 30 días"
    },
    {
      icon: CheckCircle,
      text: "Garantía de satisfacción"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Background Circles */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4 mr-2" />
            🚀 Únete a 50+ empresas que ya optimizan con IA
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Transformar
            </span>{' '}
            tu Recruiting?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Únete a las empresas que ya están viendo <strong>40-60% menos CPA</strong> y 
            <strong> 87% menos tiempo</strong> en gestión manual
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-10"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <benefit.icon className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="xl"
                icon={Play}
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-white/25"
              >
                Ver Demo en Vivo
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="xl"
                icon={ArrowRight}
                iconPosition="right"
                className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm"
              >
                Empezar Gratis 14 Días
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-blue-200 text-sm mb-4">
              ✅ Sin setup fees • ✅ Sin compromisos • ✅ Garantía 30 días
            </p>
            
            <div className="flex justify-center items-center flex-wrap gap-8 opacity-70">
              {/* Trust badges/logos would go here */}
              <div className="text-xs text-blue-200">
                🔒 SOC2 Compliant
              </div>
              <div className="text-xs text-blue-200">
                ⚡ 99.9% Uptime SLA
              </div>
              <div className="text-xs text-blue-200">
                🛡️ GDPR Ready
              </div>
              <div className="text-xs text-blue-200">
                📈 ROI Garantizado
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <motion.div
                className="text-3xl lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                50+
              </motion.div>
              <div className="text-blue-200">Empresas confían en nosotros</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                viewport={{ once: true }}
              >
                100K+
              </motion.div>
              <div className="text-blue-200">Ofertas optimizadas</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                €2M+
              </motion.div>
              <div className="text-blue-200">Ahorrados en costes</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Action Button for Mobile */}
        <motion.div
          className="fixed bottom-6 right-6 lg:hidden z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.button
            className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 10px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;