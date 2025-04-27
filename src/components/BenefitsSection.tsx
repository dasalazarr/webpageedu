import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, BarChart3, Calendar, Bell, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric?: string;
}

const BenefitCard = ({
  icon,
  title,
  description,
  metric = "",
}: BenefitCardProps) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-blue-100 text-blue-700">{icon}</div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          {metric && (
            <p className="text-sm font-medium text-blue-600">{metric}</p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Atención Inmediata 24/7",
      description:
        "Respuestas instantáneas a consultas estudiantiles en cualquier momento, mejorando la experiencia y satisfacción del alumno.",
      metric: "Disponibilidad 100%",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Optimización de Recursos",
      description:
        "Reducción significativa de la carga administrativa al automatizar respuestas a preguntas frecuentes y procesos repetitivos.",
      metric: "Hasta 70% menos consultas manuales",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Eficiencia Operativa",
      description:
        "Agendamiento simplificado de citas y reuniones, eliminando la necesidad de coordinación manual y reduciendo costos logísticos.",
      metric: "85% de citas agendadas automáticamente",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Comunicación Efectiva",
      description:
        "Notificaciones proactivas sobre eventos, fechas límite y cambios importantes, asegurando que la información llegue oportunamente.",
      metric: "Reducción del 60% en olvidos",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovación y Modernización",
      description:
        "Posicionamiento como institución tecnológicamente avanzada, mejorando la percepción de la universidad entre estudiantes actuales y potenciales.",
      metric: "Aumento del 40% en satisfacción",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beneficios para tu Universidad
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro Asistente IA en WhatsApp transforma la comunicación
            universitaria, ofreciendo ventajas medibles y significativas.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                metric={benefit.metric}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
