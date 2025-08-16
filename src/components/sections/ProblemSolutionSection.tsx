"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, Target, Zap, TrendingUp } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: "Gestión Manual Fragmentada",
      description: "15-20 horas/semana por recruiter en tareas repetitivas",
      impact: "€800-1,200/mes en tiempo perdido",
      color: "text-red-600 bg-red-50",
    },
    {
      icon: TrendingDown,
      title: "Optimización Ineficiente",
      description: "40-60% desperdicio de presupuesto en canales de bajo rendimiento",
      impact: "€2,000-5,000/mes mal optimizado",
      color: "text-orange-600 bg-orange-50",
    },
    {
      icon: AlertTriangle,
      title: "Falta de Visibilidad",
      description: "Sin datos unificados de performance cross-channel",
      impact: "Decisiones basadas en intuición",
      color: "text-yellow-600 bg-yellow-50",
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Automatización Total",
      description: "One-click distribution to 10+ channels",
      benefit: "15h/semana → 2h/semana",
      roi: "€600-900/mes ahorrados",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Target,
      title: "Optimización IA",
      description: "Smart budget allocation based on real performance",
      benefit: "40-60% mejora eficiencia",
      roi: "€1,500-3,000/mes ahorrados",
      color: "text-green-600 bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "Analytics Unificado",
      description: "Cross-channel insights in real-time",
      benefit: "25-40% incremento performance",
      roi: "Decisiones data-driven",
      color: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Del Caos Manual a la{' '}
            <span className="gradient-text">Optimización IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforma tu gestión de campañas de ofertas de trabajo de un proceso manual 
            y fragmentado a una máquina de optimización automatizada
          </p>
        </motion.div>

        {/* Before vs After */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* BEFORE - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4 mr-2" />
                ANTES: Gestión Manual
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Problemas Actuales
              </h3>
              <p className="text-gray-600">
                La gestión manual de múltiples job boards es ineficiente, costosa y propensa a errores
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover-lift"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${problem.color} mr-4 flex-shrink-0`}>
                      <problem.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {problem.description}
                      </p>
                      <div className="text-sm font-medium text-red-600">
                        💸 {problem.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual representation of chaos */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 relative"
            >
              <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
                {['Indeed', 'LinkedIn', 'Jooble', 'Talent', 'InfoJobs'].map((platform, index) => (
                  <motion.div
                    key={platform}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="bg-white px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 shadow-sm"
                  >
                    {platform}
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-4 text-red-500 text-sm font-medium">
                Gestión fragmentada y manual
              </div>
            </motion.div>
          </motion.div>

          {/* AFTER - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                DESPUÉS: Con JobOptimizer
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Nuestra Solución
              </h3>
              <p className="text-gray-600">
                Automatización inteligente que optimiza tus campañas mientras tú te enfocas en estrategia
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover-lift"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${solution.color} mr-4 flex-shrink-0`}>
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {solution.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div className="text-sm font-medium text-green-600 mb-1 sm:mb-0">
                          ✅ {solution.benefit}
                        </div>
                        <div className="text-sm font-medium text-blue-600">
                          💰 {solution.roi}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual representation of organized solution */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 relative"
            >
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-blue-900 mb-2">
                    JobOptimizer Platform
                  </div>
                  <div className="text-sm text-blue-600">
                    Distribución unificada y optimizada
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-white px-4 py-2 rounded-lg shadow-md border border-blue-300 text-blue-800 font-medium"
                  >
                    Una sola plataforma
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex justify-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    {['10+ Canales', 'IA Optimization', 'Real-time Analytics'].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded-md"
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Resultado: Transformación Completa
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">40-60%</div>
                <div className="text-blue-100">Reducción en CPA</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">87%</div>
                <div className="text-blue-100">Menos tiempo gestión</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">3x</div>
                <div className="text-blue-100">Más aplicaciones</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;