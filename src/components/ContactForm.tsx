import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: "",
    university: "",
    position: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to your backend
      setFormStatus("success");
      setIsSubmitting(false);

      // Reset form after successful submission
      if (formStatus === "success") {
        setFormState({
          name: "",
          university: "",
          position: "",
          email: "",
          message: "",
        });
      }
    }, 1500);
  };

  return (
    <Card className={`w-full max-w-md mx-auto shadow-lg bg-white ${className}`}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Contáctanos
        </CardTitle>
        <CardDescription className="text-center">
          Completa el formulario y nos pondremos en contacto contigo a la
          brevedad
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formStatus === "success" && (
          <Alert className="mb-4 bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-600">
              ¡Gracias por contactarnos! Te responderemos a la brevedad.
            </AlertDescription>
          </Alert>
        )}

        {formStatus === "error" && (
          <Alert className="mb-4 bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-600">
              Hubo un problema al enviar tu mensaje. Por favor intenta
              nuevamente.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre"
              required
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">Universidad</Label>
            <Input
              id="university"
              name="university"
              placeholder="Nombre de tu institución"
              required
              value={formState.university}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Cargo</Label>
            <Input
              id="position"
              name="position"
              placeholder="Tu cargo en la institución"
              required
              value={formState.position}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@correo.edu"
              required
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="¿Cómo podemos ayudarte?"
              rows={4}
              required
              value={formState.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="mr-2">Enviando</span>
                <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Enviar mensaje
              </>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-xs text-muted-foreground">
        <p className="text-center">
          También puedes contactarnos directamente a través de{" "}
          <a
            href="mailto:contacto@asistente-ia.com"
            className="text-primary hover:underline"
          >
            contacto@asistente-ia.com
          </a>
        </p>
        <p className="mt-2">
          Al enviar este formulario, aceptas nuestra{" "}
          <a href="#" className="text-primary hover:underline">
            Política de Privacidad
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
