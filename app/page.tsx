"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: ""
  })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    // Simulate sending email
    setTimeout(() => {
      alert("Cotización enviada exitosamente. Nos contactaremos pronto.")
      setFormData({ nombre: "", email: "", telefono: "", tipoProyecto: "", mensaje: "" })
      setSending(false)
    }, 1500)
  }

  const projects = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tuz5vkSoybW7jO5OGuSQE-BNukL9npjkNIVnSSPVzWct49nw1wfk.jpg",
      title: "Estructuras Industriales",
      description: "Montaje de estructuras metálicas para proyectos industriales y comerciales"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/UR6fw6VMBdJq5ZBR7Cqqi-6onsFLvcXtbi6ryEy4eW5ayht1IOP1.jpg",
      title: "Instalación de Señalética",
      description: "Montaje e instalación de letreros y señalética comercial con grúa"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/WhAvgz9QC0c2BF8gzAYqW-pN1Ln9udaBdcx14I6lgcM4eC9j6QON.jpg",
      title: "Techumbres Metálicas",
      description: "Construcción de techumbres y cobertizos con estructura metálica"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/m4iJR8zIPiqBSemsBfjpF-YP275YFnqffThaBtnWFfZHeOYIqMMv.jpg",
      title: "Edificios Modulares",
      description: "Estructuras metálicas para edificios modulares y construcción en altura"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/aYDNjdWlDQtWnOxaPTNy6-Dv9Wwl1jpgb2tXYrnmVLj45STNJJEy.jpg",
      title: "Galpones Industriales",
      description: "Construcción de galpones y naves industriales completas"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/9IxYf97nJr8e7f3qgRnWs-0lmI620PBqIyhsCz0Ar13sOZZwZrrd.jpg",
      title: "Estructuras Comerciales",
      description: "Montaje de estructuras para locales y proyectos comerciales"
    }
  ]

  const services = [
    {
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación e instalación de todo tipo de estructuras metálicas para proyectos industriales y comerciales.",
      icon: "🏗️"
    },
    {
      title: "Obras Menores",
      description: "Ejecución de obras menores de construcción, remodelaciones y ampliaciones con acabado profesional.",
      icon: "🔨"
    },
    {
      title: "Techumbres",
      description: "Construcción e instalación de techumbres metálicas, cobertizos y estructuras de techo.",
      icon: "🏠"
    },
    {
      title: "Montaje Industrial",
      description: "Montaje de estructuras para galpones, naves industriales y edificios comerciales.",
      icon: "🏭"
    },
    {
      title: "Señalética",
      description: "Instalación de letreros corporativos y señalética comercial con servicio de grúa.",
      icon: "🪧"
    },
    {
      title: "Soldadura",
      description: "Servicios especializados de soldadura y fabricación de piezas metálicas a medida.",
      icon: "⚡"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2e5a] text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/dFSy2Glaw1OKZdBXJvejz-5RkvDu5cslKlxr89LkPGpOQnmkN9j7.jpg"
                alt="Estructura Solis"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-[#ff6b1a]">Estructura Solis</h1>
                <p className="text-sm text-gray-300">Estructuras Metálicas</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="hover:text-[#ff6b1a] transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-[#ff6b1a] transition-colors">Servicios</a>
              <a href="#proyectos" className="hover:text-[#ff6b1a] transition-colors">Proyectos</a>
              <a href="#cotizador" className="hover:text-[#ff6b1a] transition-colors">Cotizador</a>
              <a href="#contacto" className="hover:text-[#ff6b1a] transition-colors">Contacto</a>
              <a 
                href="https://wa.me/56994358492" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ff6b1a] hover:bg-[#e55a0a] px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col gap-4">
                <a href="#inicio" className="hover:text-[#ff6b1a] transition-colors" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#servicios" className="hover:text-[#ff6b1a] transition-colors" onClick={() => setMenuOpen(false)}>Servicios</a>
                <a href="#proyectos" className="hover:text-[#ff6b1a] transition-colors" onClick={() => setMenuOpen(false)}>Proyectos</a>
                <a href="#cotizador" className="hover:text-[#ff6b1a] transition-colors" onClick={() => setMenuOpen(false)}>Cotizador</a>
                <a href="#contacto" className="hover:text-[#ff6b1a] transition-colors" onClick={() => setMenuOpen(false)}>Contacto</a>
                <a 
                  href="https://wa.me/56994358492" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ff6b1a] hover:bg-[#e55a0a] px-6 py-2 rounded-lg font-semibold transition-colors text-center"
                >
                  WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#1a2e5a] via-[#2d4575] to-[#1a2e5a]">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/9IxYf97nJr8e7f3qgRnWs-0lmI620PBqIyhsCz0Ar13sOZZwZrrd.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white text-balance">
              Expertos en Estructuras Metálicas
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 text-pretty">
              Construcción y montaje de estructuras metálicas de todo tipo. Calidad, seguridad y experiencia en cada proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cotizador">
                <Button size="lg" className="bg-[#ff6b1a] hover:bg-[#e55a0a] text-white px-8 py-6 text-lg">
                  Solicitar Cotización
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e5a]">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Soluciones integrales en estructuras metálicas y construcción
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-[#ff6b1a]">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1a2e5a]">{service.title}</h3>
                  <p className="text-gray-600 text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e5a]">Proyectos Realizados</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Galería de nuestros trabajos más destacados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">{project.title}</h3>
                  <p className="text-gray-600 text-pretty">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="cotizador" className="py-20 bg-[#1a2e5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Solicitar Cotización</h2>
              <p className="text-xl text-gray-300 text-pretty">
                Envíanos los detalles de tu proyecto y te contactaremos a la brevedad
              </p>
            </div>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre">Nombre Completo</Label>
                    <Input 
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="mt-2"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2"
                      placeholder="juan@ejemplo.cl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className="mt-2"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tipoProyecto">Tipo de Proyecto</Label>
                    <Input 
                      id="tipoProyecto"
                      type="text"
                      required
                      value={formData.tipoProyecto}
                      onChange={(e) => setFormData({...formData, tipoProyecto: e.target.value})}
                      className="mt-2"
                      placeholder="Ej: Galpón industrial, techumbre, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Descripción del Proyecto</Label>
                    <Textarea 
                      id="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      className="mt-2 min-h-[120px]"
                      placeholder="Describe los detalles de tu proyecto: dimensiones, ubicación, plazos, etc."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#ff6b1a] hover:bg-[#e55a0a] text-white"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar Cotización"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e5a]">Contacto</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Estamos ubicados en Maipú y listos para atender tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b1a] text-white rounded-full mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">Ubicación</h3>
                <p className="text-gray-600">
                  Camino La Farfana<br />
                  Comuna de Maipú<br />
                  Santiago, Chile
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b1a] text-white rounded-full mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">Teléfono</h3>
                <a href="https://wa.me/56994358492" className="text-gray-600 hover:text-[#ff6b1a]">
                  +56 9 9435 8492
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b1a] text-white rounded-full mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">Email</h3>
                <a href="mailto:contacto@estructurasolis.cl" className="text-gray-600 hover:text-[#ff6b1a] break-all">
                  contacto@estructurasolis.cl
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2e5a] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/dFSy2Glaw1OKZdBXJvejz-5RkvDu5cslKlxr89LkPGpOQnmkN9j7.jpg"
              alt="Estructura Solis"
              className="h-16 w-16 object-contain mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#ff6b1a]">Estructura Solis</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Expertos en estructuras metálicas y obras menores de construcción
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Estructura Solis. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Diseño ®RPNET SpA
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/56994358492"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}
