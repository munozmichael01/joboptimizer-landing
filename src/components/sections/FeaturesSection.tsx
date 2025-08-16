"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  BarChart3, 
  Clock, 
  Cpu, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Automatización Total",
      subtitle: "One-click distribution to 10+ channels",
      description: "Distribuye tu campaña a múltiples job boards con un solo clic. Sin configuraciones manuales, sin errores humanos.",
      benefits: [
        "Distribución simultánea a 10+ canales",
        "Configuración automática por canal",
        "Sincronización en tiempo real"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Optimización IA",
      subtitle: "Smart budget allocation based on real performance",
      description: "Nuestra IA redistribuye tu presupuesto automáticamente hacia los canales que mejor rendimiento están dando.",
      benefits: [
        "Redistribución automática de presupuesto",
        "Machine learning predictivo",
        "Optimización continua 24/7"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Unificado",
      subtitle: "Cross-channel insights in real-time",
      description: "Dashboard único con todas tus métricas consolidadas. CPA, aplicaciones, ROI y rendimiento por canal en tiempo real.",
      benefits: [
        "Dashboard consolidado tiempo real",
        "Métricas cross-channel unificadas",
        "Reports automáticos personalizables"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "De 15h/semana a 2h/semana en gestión de campañas",
      metric: "87% menos tiempo"
    },
    {
      icon: Cpu,
      title: "Tecnología Avanzada",
      description: "APIs enterprise con 99.9% uptime y seguridad SOC2",
      metric: "99.9% uptime"
    },
    {
      icon: TrendingUp,
      title: "ROI Garantizado",
      description: "Clientes ven 40-60% mejora en CPA en primeros 30 días",
      metric: "40-60% mejor CPA"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
      
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
            Tres Pilares que{' '}
            <span className="gradient-text">Transforman</span>{' '}
            tu Recruiting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada pilar está diseñado para resolver un problema específico y darte 
            resultados medibles desde el primer día
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-20 lg:space-y-32">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${feature.bgColor} ${feature.textColor}`}>
                  <feature.icon className="w-4 h-4 mr-2" />
                  Pilar {index + 1}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-gray-600 mb-6">
                  {feature.subtitle}
                </p>
                
                <p className="text-lg text-gray-700 mb-8">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className={`w-5 h-5 mr-3 ${feature.textColor}`} />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
                >
                  Ver en Acción
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                >
                  {/* Mock interface based on feature */}
                  {index === 0 && (
                    // Automation Visual
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Nueva Campaña</h4>
                        <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Automatizada</div>
                      </div>
                      <div className="space-y-3">
                        {['Indeed', 'LinkedIn', 'Talent.com', 'Jooble', 'InfoJobs'].map((channel, i) => (
                          <motion.div
                            key={channel}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-sm font-medium">{channel}</span>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.5 + i * 0.2 }}
                              className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-sm text-gray-500">Tiempo total de configuración</div>
                        <div className="text-2xl font-bold text-blue-600">30 segundos</div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    // AI Optimization Visual
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Optimización IA</h4>
                        <div className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">En vivo</div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Talent.com</span>
                            <span className="text-sm font-medium text-green-600">+15% budget</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-green-500 h-2 rounded-full"
                              initial={{ width: "45%" }}
                              animate={{ width: "60%" }}
                              transition={{ duration: 2, delay: 1 }}
                            />
                          </div>
                          <div className="text-xs text-gray-500 mt-1">CPA: €12.50 (-20%)</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Indeed</span>
                            <span className="text-sm font-medium text-red-600">-10% budget</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-red-500 h-2 rounded-full"
                              initial={{ width: "35%" }}
                              animate={{ width: "25%" }}
                              transition={{ duration: 2, delay: 1.2 }}
                            />
                          </div>
                          <div className="text-xs text-gray-500 mt-1">CPA: €18.90 (+5%)</div>
                        </div>
                      </div>
                      <div className="mt-4 text-center bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-blue-600">Próxima optimización en:</div>
                        <div className="text-lg font-bold text-blue-800">00:04:32</div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    // Analytics Visual
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Dashboard Analytics</h4>
                        <div className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">Tiempo real</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-purple-50 p-3 rounded-lg text-center">
                          <div className="text-sm text-purple-600">CPA Promedio</div>
                          <div className="text-xl font-bold text-purple-800">€14.30</div>
                          <div className="text-xs text-green-600">↓ 23% vs mes anterior</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <div className="text-sm text-green-600">Aplicaciones</div>
                          <div className="text-xl font-bold text-green-800">1,247</div>
                          <div className="text-xs text-green-600">↑ 45% vs mes anterior</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium mb-2">Performance por Canal</div>
                        <div className="space-y-2">
                          {[
                            { name: 'Talent.com', performance: 85, color: 'bg-green-500' },
                            { name: 'LinkedIn', performance: 72, color: 'bg-blue-500' },
                            { name: 'Indeed', performance: 58, color: 'bg-yellow-500' }
                          ].map((channel, i) => (
                            <div key={channel.name} className="flex items-center justify-between">
                              <span className="text-xs">{channel.name}</span>
                              <div className="flex-1 mx-2 bg-gray-200 rounded-full h-1.5">
                                <motion.div 
                                  className={`${channel.color} h-1.5 rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${channel.performance}%` }}
                                  transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                                />
                              </div>
                              <span className="text-xs font-medium">{channel.performance}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Beneficios Adicionales
            </h3>
            <p className="text-lg text-gray-600">
              Cada característica está pensada para maximizar tu ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="text-2xl font-bold gradient-text">
                  {feature.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;