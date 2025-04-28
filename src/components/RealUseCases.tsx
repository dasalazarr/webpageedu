import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UseCaseProps {
  title: string;
  description: string;
  conversation: Array<{
    isBot: boolean;
    message: string;
  }>;
}

interface RealUseCasesProps {
  title?: string;
  subtitle?: string;
  useCases?: UseCaseProps[];
}

const RealUseCases = ({
  title = "Casos de Uso del MVP",
  subtitle = "Explora cómo estamos probando y desarrollando nuestro MVP de asistente IA en WhatsApp",
  useCases = [
    {
      title: "Información de Inscripción",
      description: "Respuesta inmediata a consultas sobre procesos de inscripción",
      conversation: [
        {
          isBot: true,
          message: "Hola, soy el asistente virtual de tu universidad. ¿En qué puedo ayudarte hoy?"
        },
        {
          isBot: false,
          message: "Necesito información sobre el proceso de inscripción para el próximo semestre."
        },
        {
          isBot: true,
          message: "El período de inscripción comienza el 15 de julio. Puedo enviarte los requisitos y guiarte en el proceso. ¿Te gustaría agendar una cita con un asesor académico?"
        }
      ]
    },
    {
      title: "Consulta de Calificaciones",
      description: "Acceso seguro y rápido a calificaciones y estado académico",
      conversation: [
        {
          isBot: true,
          message: "Hola, ¿en qué puedo ayudarte hoy?"
        },
        {
          isBot: false,
          message: "¿Puedes decirme mis calificaciones del semestre actual?"
        },
        {
          isBot: true,
          message: "Por supuesto. Después de verificar tu identidad, puedo mostrarte que tienes un promedio de 8.7 este semestre. ¿Te gustaría ver el desglose por materia?"
        }
      ]
    },
    {
      title: "Programación de Citas",
      description: "Agendamiento automático sin necesidad de intermediarios",
      conversation: [
        {
          isBot: true,
          message: "¿En qué puedo ayudarte hoy?"
        },
        {
          isBot: false,
          message: "Necesito programar una cita con el departamento de bienestar estudiantil."
        },
        {
          isBot: true,
          message: "Claro, puedo ayudarte con eso. El departamento tiene disponibilidad los martes y jueves de 10am a 4pm. ¿Qué día y hora te conviene más?"
        }
      ]
    }
  ]
}: RealUseCasesProps) => {
  return (
    <section id="use-cases" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Prueba del MVP
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-white rounded-lg shadow-inner p-4 m-4 border border-gray-100">
                  <div className="flex items-center space-x-2 pb-3 border-b border-gray-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="font-medium text-sm">Asistente Universitario</p>
                  </div>
                  <div className="py-4 space-y-3">
                    {useCase.conversation.map((message, msgIndex) => (
                      <div 
                        key={msgIndex} 
                        className={`${
                          message.isBot 
                            ? "bg-gray-100 rounded-lg p-2 max-w-[90%]" 
                            : "bg-blue-100 rounded-lg p-2 max-w-[90%] ml-auto"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.link/zjujzg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Implementa en tu universidad
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RealUseCases;
