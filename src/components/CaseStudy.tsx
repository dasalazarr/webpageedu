import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyProps {
  title?: string;
  subtitle?: string;
  challenge?: string;
  results?: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const CaseStudy = ({
  title = "Caso de Éxito: Universidad Ecotec",
  subtitle = "Transformando la comunicación universitaria con IA en WhatsApp",
  challenge = "La Universidad Ecotec buscaba mejorar la experiencia de sus estudiantes y optimizar recursos administrativos, enfrentando desafíos como tiempos de respuesta lentos, sobrecarga de consultas repetitivas y dificultades en la programación de citas.",
  results = [
    {
      metric: "Reducción en tiempo de respuesta",
      value: "85%",
      description: "De horas a segundos en la atención de consultas frecuentes",
    },
    {
      metric: "Mejora en satisfacción estudiantil",
      value: "92%",
      description: "De los estudiantes califican la experiencia como excelente",
    },
    {
      metric: "Citas agendadas automáticamente",
      value: "1,200+",
      description: "Por mes, sin intervención del personal administrativo",
    },
    {
      metric: "Eficiencia administrativa",
      value: "40%",
      description: "Reducción en carga de trabajo del personal de atención",
    },
  ],
  testimonial = {
    quote:
      "La implementación del Asistente IA en WhatsApp ha transformado nuestra capacidad de respuesta y la experiencia de nuestros estudiantes. Ahora podemos ofrecer atención inmediata 24/7 y nuestro personal administrativo puede enfocarse en tareas de mayor valor.",
    author: "María González",
    position: "Directora de Innovación Tecnológica, Universidad Ecotec",
  },
}: CaseStudyProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Caso de Éxito
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>El Desafío</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{challenge}</p>
              </CardContent>
            </Card>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Universidad Ecotec campus"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Resultados Cuantificables</CardTitle>
                <CardDescription>
                  Impacto medible tras la implementación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg bg-gray-50"
                    >
                      <p className="text-3xl font-bold text-primary mb-1">
                        {result.value}
                      </p>
                      <h4 className="font-medium mb-1">{result.metric}</h4>
                      <p className="text-sm text-gray-600">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <footer>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Descubre cómo implementarlo en tu universidad
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
