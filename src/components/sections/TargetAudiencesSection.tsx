"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Globe,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Button from '../ui/Button';

const TargetAudiencesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const audiences = [
    {
      id: 'job-boards',
      title: 'Job Boards',
      subtitle: 'Scale your client offerings with AI optimization',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      description: 'Transforma tu job board en una plataforma de marketing inteligente para tus clientes empresariales.',
      painPoints: [
        'Clientes piden más valor que simple publicación',
        'Competencia con job boards más grandes',
        'Dificultad para justificar precios premium',
        'Falta de herramientas de optimización'
      ],
      solutions: [
        'Ofrece optimización IA como valor añadido',
        'Diferénciate con tecnología avanzada',
        'Justifica precios premium con ROI medible',
        'Dashboard white-label para tus clientes'
      ],
      metrics: [
        { label: 'Incremento en retención clientes', value: '40%' },
        { label: 'Aumento precio promedio servicio', value: '60%' },
        { label: 'Nuevos clientes por referencia', value: '3x' }
      ],
      cta: 'Partnership Program',
      testimonial: {
        quote: "JobOptimizer nos permitió ofrecer optimización IA a nuestros 500+ clientes empresariales. Aumentamos nuestro ARPU un 60% y la satisfacción del cliente un 40%.",
        author: "Ana García",
        position: "CEO, TalentBoard España",
        company: "200+ empresas clientes"
      }
    },
    {
      id: 'ats-providers',
      title: 'ATS Providers',
      subtitle: 'Upgrade your multiposting with smart distribution',
      icon: Building2,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      description: 'Convierte tu multiposting básico en una solución de distribución inteligente que tus clientes amarán.',
      painPoints: [
        'Multiposting básico sin optimización',
        'Clientes ven poco ROI en job postings',
        'Competencia con ATS más completos',
        'Falta de analytics avanzados'
      ],
      solutions: [
        'API integration para upgrade automático',
        'Optimización IA como premium feature',
        'Analytics avanzados incluidos',
        'Revenue sharing atractivo'
      ],
      metrics: [
        { label: 'Incremento en upselling', value: '75%' },
        { label: 'Mejora en NPS clientes', value: '45%' },
        { label: 'Revenue adicional mensual', value: '€50K+' }
      ],
      cta: 'API Integration',
      testimonial: {
        quote: "Integramos JobOptimizer en nuestro ATS y ahora nuestros clientes ven 40% mejor ROI en job postings. Es nuestro diferenciador clave.",
        author: "Carlos López",
        position: "CTO, HRTech Solutions",
        company: "1,500+ empresas clientes"
      }
    },
    {
      id: 'staffing-agencies',
      title: 'Staffing Agencies',
      subtitle: 'Maximize your recruitment ROI',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      description: 'Optimiza tus márgenes y escala tus operaciones sin incrementar costes linealmente.',
      painPoints: [
        'Márgenes apretados por competencia',
        'Gestión manual consume recursos',
        'Dificultad para escalar operaciones',
        'CPA inconsistente entre canales'
      ],
      solutions: [
        'Automatización libera tiempo para ventas',
        'Optimización IA mejora márgenes',
        'Scaling sin aumentar headcount',
        'CPA predecible y optimizado'
      ],
      metrics: [
        { label: 'Reducción en CPA promedio', value: '45%' },
        { label: 'Aumento en volumen placement', value: '60%' },
        { label: 'Ahorro tiempo semanal', value: '13h' }
      ],
      cta: 'Free Trial',
      testimonial: {
        quote: "Reducimos nuestro CPA un 45% y aumentamos el volumen un 60%. Ahora podemos competir con agencias más grandes sin aumentar nuestro equipo.",
        author: "María Ruiz",
        position: "Operations Director, StaffPro",
        company: "50+ consultores"
      }
    },
    {
      id: 'empresas-directas',
      title: 'Empresas Directas',
      subtitle: 'Optimize your hiring campaigns across all channels',
      icon: Briefcase,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      description: 'Departamentos de RRHH que contratan en volumen y necesitan eficiencia y control de costes.',
      painPoints: [
        'Presupuesto RRHH limitado y vigilado',
        'Presión por reducir time-to-hire',
        'Falta de expertise en marketing digital',
        'Necesidad de justificar ROI ante CFO'
      ],
      solutions: [
        'ROI medible y transparente',
        'Automatización reduce time-to-hire',
        'Interfaz diseñada para RRHH',
        'Reports automáticos para management'
      ],
      metrics: [
        { label: 'Reducción time-to-hire', value: '25%' },
        { label: 'Ahorro presupuesto anual', value: '€30K+' },
        { label: 'Incremento en aplicaciones quality', value: '40%' }
      ],
      cta: 'Get Demo',
      testimonial: {
        quote: "Como Head of People en una startup de 200 personas, JobOptimizer me ahorra 10h/semana y hemos reducido nuestro coste por contratación un 30%.",
        author: "David Martín",
        position: "Head of People, TechStartup",
        company: "200+ empleados"
      }
    }
  ];

  const currentAudience = audiences[activeTab];

  return (
    <section id="customers" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluciones para Cada{' '}
            <span className="gradient-text">Tipo de Cliente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde job boards hasta empresas directas, cada segmento tiene necesidades específicas. 
            Descubre cómo JobOptimizer se adapta a tu modelo de negocio.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 lg:mb-16"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex flex-wrap">
              {audiences.map((audience, index) => (
                <motion.button
                  key={audience.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-4 lg:px-6 py-3 lg:py-4 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === index
                      ? `bg-gradient-to-r ${audience.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: activeTab === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <audience.icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{audience.title}</span>
                  <span className="sm:hidden">{audience.title.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Left Column - Content */}
              <div className="p-8 lg:p-12">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${currentAudience.bgColor} ${currentAudience.textColor}`}>
                  <currentAudience.icon className="w-4 h-4 mr-2" />
                  {currentAudience.title}
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {currentAudience.subtitle}
                </h3>

                <p className="text-lg text-gray-600 mb-8">
                  {currentAudience.description}
                </p>

                {/* Problems vs Solutions */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-red-500" />
                      Retos Actuales
                    </h4>
                    <div className="space-y-3">
                      {currentAudience.painPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {point}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-green-500" />
                      Nuestra Solución
                    </h4>
                    <div className="space-y-3">
                      {currentAudience.solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          {solution}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className={`bg-gradient-to-r ${currentAudience.color} hover:shadow-xl`}
                >
                  {currentAudience.cta}
                </Button>
              </div>

              {/* Right Column - Metrics & Testimonial */}
              <div className={`p-8 lg:p-12 ${currentAudience.bgColor} relative`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                <div className="relative">
                  {/* Metrics */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      Resultados Típicos
                    </h4>
                    <div className="space-y-4">
                      {currentAudience.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{metric.label}</span>
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                              <span className={`text-xl font-bold ${currentAudience.textColor}`}>
                                {metric.value}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/50"
                  >
                    <div className="text-2xl text-gray-400 mb-3">&ldquo;</div>
                    <p className="text-gray-700 mb-4 italic">
                      {currentAudience.testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentAudience.color} flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold text-lg">
                          {currentAudience.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {currentAudience.testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {currentAudience.testimonial.position}
                        </div>
                        <div className="text-xs text-gray-500">
                          {currentAudience.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TargetAudiencesSection;