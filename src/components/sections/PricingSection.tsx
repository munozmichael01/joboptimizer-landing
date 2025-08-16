"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  Users,
  ArrowRight,
  Calculator,
  TrendingUp,
  Shield
} from 'lucide-react';
import Button from '../ui/Button';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showROICalculator, setShowROICalculator] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect para empresas empezando con automatización',
      price: { monthly: 299, annual: 239 }, // 20% discount annually
      originalPrice: { monthly: 399, annual: 319 },
      savings: 'Ahorra €100/mes',
      features: [
        'Hasta 500 ofertas/mes',
        '4 canales básicos (Jooble, Talent, WhatJobs, JobRapido)',
        'Dashboard básico + analytics',
        'Distribución automática',
        'Soporte email',
        'Onboarding incluido'
      ],
      feeStructure: '+ 10% fee sobre spend publicitario',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      popular: false,
      cta: 'Empezar Gratis 14 días',
      guarantee: '30 días garantía'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Para equipos que necesitan optimización avanzada',
      price: { monthly: 599, annual: 479 },
      originalPrice: { monthly: 799, annual: 639 },
      savings: 'Ahorra €200/mes',
      features: [
        'Hasta 2,000 ofertas/mes',
        '8+ canales premium (+ Indeed, LinkedIn, InfoJobs)',
        'AI optimization avanzada',
        'API integrations',
        'Advanced analytics + reporting',
        'Soporte prioritario',
        'Account manager dedicado',
        'Custom integrations'
      ],
      feeStructure: '+ 8% fee sobre spend publicitario',
      icon: Star,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      popular: true,
      cta: 'Solicitar Demo',
      guarantee: 'ROI garantizado 30 días'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Solución completa para organizaciones grandes',
      price: { monthly: 1499, annual: 1199 },
      originalPrice: { monthly: 1999, annual: 1599 },
      savings: 'Ahorra €500/mes',
      features: [
        'Hasta 10,000 ofertas/mes',
        'Todos los canales disponibles',
        'AI optimization predictiva',
        'Multi-tenant management',
        'Custom integrations ilimitadas',
        'Dedicated infrastructure',
        'SLA 99.9% uptime',
        'Onsite training',
        'Success manager dedicado'
      ],
      feeStructure: '+ 6% fee sobre spend publicitario',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      popular: false,
      cta: 'Contactar Ventas',
      guarantee: 'SLA contractual'
    },
    {
      id: 'white-label',
      name: 'White-Label',
      description: 'Solución completa para partners y resellers',
      price: { monthly: 2999, annual: 2399 },
      originalPrice: null,
      savings: 'Revenue sharing 70/30',
      features: [
        'Solución completa white-label',
        'Para job boards y ATS providers',
        'Custom branding completo',
        'Multi-cliente management',
        'Revenue sharing 70/30',
        'API completa para integración',
        'Soporte técnico dedicado',
        'Co-marketing support',
        'Partnership program exclusivo'
      ],
      feeStructure: 'Revenue sharing model',
      icon: Rocket,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      popular: false,
      cta: 'Partnership Program',
      guarantee: 'Contract personalizado'
    }
  ];

  const roiCalculatorData = [
    {
      currentSpend: 5000,
      timeSpent: 15,
      improvement: { cpa: 40, time: 87 },
      savings: { monthly: 2600, annual: 31200 }
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Precios que{' '}
            <span className="gradient-text">Generan ROI</span>{' '}
            desde el Día 1
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Planes diseñados para cada etapa de tu crecimiento. 
            Todos incluyen setup gratuito y garantía de satisfacción.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingCycle === 'annual'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anual
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                20% OFF
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : plan.borderColor
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Más Popular
                  </div>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                      €{plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-500 ml-2">/mes</span>
                  </div>
                  
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 mb-2">
                      <span className="line-through">€{plan.originalPrice[billingCycle]}/mes</span>
                    </div>
                  )}
                  
                  <div className="text-sm font-medium text-green-600">
                    {plan.savings}
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">
                    {plan.feeStructure}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 ${plan.textColor} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className={`w-full mb-4 ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.color} hover:shadow-xl` 
                      : `border-2 ${plan.borderColor} ${plan.textColor} hover:bg-gradient-to-r hover:${plan.color} hover:text-white`
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="text-center text-xs text-gray-500">
                  {plan.guarantee}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Calcula tu ROI Potencial
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Descubre cuánto puedes ahorrar automatizando tu distribución de ofertas
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl lg:text-4xl font-bold mb-2">40-60%</div>
                <div className="text-blue-100">Reducción promedio en CPA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl lg:text-4xl font-bold mb-2">€2,600</div>
                <div className="text-blue-100">Ahorro promedio mensual</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl lg:text-4xl font-bold mb-2">87%</div>
                <div className="text-blue-100">Menos tiempo gestión</div>
              </div>
            </div>

            <Button
              variant="secondary"
              size="lg"
              icon={Calculator}
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => setShowROICalculator(!showROICalculator)}
            >
              Calcular mi ROI Personalizado
            </Button>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Setup Gratuito
            </h4>
            <p className="text-gray-600">
              Nuestro equipo configura todo por ti. Sin costes ocultos ni sorpresas.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Garantía 30 Días
            </h4>
            <p className="text-gray-600">
              Si no ves mejores resultados en 30 días, te devolvemos el dinero.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Soporte Dedicado
            </h4>
            <p className="text-gray-600">
              Account manager dedicado y soporte técnico prioritario incluido.
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                ¿Cómo funciona el fee sobre spend?
              </h4>
              <p className="text-gray-600 text-sm">
                Solo pagas el fee cuando gastas dinero en publicidad. Sin gasto, sin fee adicional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                ¿Puedo cambiar de plan?
              </h4>
              <p className="text-gray-600 text-sm">
                Sí, puedes hacer upgrade o downgrade en cualquier momento sin penalizaciones.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                ¿Incluye integración con mi ATS?
              </h4>
              <p className="text-gray-600 text-sm">
                Sí, ofrecemos integraciones con los principales ATS del mercado sin coste adicional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                ¿Hay contrato de permanencia?
              </h4>
              <p className="text-gray-600 text-sm">
                No, todos nuestros planes son sin compromiso. Puedes cancelar cuando quieras.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;