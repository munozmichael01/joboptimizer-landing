"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, BarChart3, Users, Zap } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const statsData = [
    { value: '40-60%', label: 'Reducción en CPA', icon: BarChart3 },
    { value: '15h → 2h', label: 'Tiempo semanal', icon: Zap },
    { value: '50+', label: 'Partners activos', icon: Users },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Job Distribution Platform
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Automatiza y{' '}
              <span className="gradient-text">Optimiza</span>{' '}
              tus Campañas de Ofertas de Trabajo
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Distribuye a múltiples job boards, optimiza presupuesto automáticamente con IA, 
              maximiza aplicaciones con menor CPA
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={Play}
                className="shadow-2xl hover:shadow-blue-500/25"
              >
                Ver Demo en Vivo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Solicitar Acceso Beta
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="text-sm text-gray-500 mb-4">
                Trusted by 50+ job boards and staffing agencies
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <stat.icon className="w-5 h-5 text-blue-600 mr-2" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Dashboard Mockup */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Browser Header */}
              <div className="flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-500 border">
                    joboptimizer.com/dashboard
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                {/* Top Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-blue-600 mb-1">Campañas Activas</div>
                    <div className="text-lg font-bold text-blue-800">12</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-green-600 mb-1">CPA Promedio</div>
                    <div className="text-lg font-bold text-green-800">€14.50</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-xs text-orange-600 mb-1">Aplicaciones</div>
                    <div className="text-lg font-bold text-orange-800">1,247</div>
                  </div>
                </div>

                {/* Channel Distribution Chart */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    Distribución por Canales
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Talent.com</span>
                      <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                        />
                      </div>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Indeed</span>
                      <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-green-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                        />
                      </div>
                      <span className="text-xs font-medium">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">LinkedIn</span>
                      <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-orange-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "35%" }}
                          transition={{ duration: 1.5, delay: 1.4 }}
                        />
                      </div>
                      <span className="text-xs font-medium">35%</span>
                    </div>
                  </div>
                </div>

                {/* Active Campaigns */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded">
                    <div className="text-xs">Senior Developer Madrid</div>
                    <div className="text-xs text-green-600">Activa</div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded">
                    <div className="text-xs">Marketing Manager BCN</div>
                    <div className="text-xs text-green-600">Activa</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <div className="text-xs text-gray-600 mb-1">Optimización IA</div>
              <div className="text-sm font-bold text-green-600">+23% ROI</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <div className="text-xs text-gray-600 mb-1">Tiempo ahorrado</div>
              <div className="text-sm font-bold text-blue-600">13h/semana</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;