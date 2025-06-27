
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con nuestro soporte 24/7, incluso sin experiencia previa." cta1="¡Comienza Ahora!" />
<How step1Title="Conócenos" step1Desc="Habla con nuestros expertos en digitalización." step2Title="Diseño Express" step2Desc="Construimos tu sitio en 24 horas." step3Title="Ventas Online" step3Desc="Comienza a vender digitalmente sin esfuerzo." />
<Aboutus headline="WebGo: Digitaliza y Crece Hoy" subheadline="Transformamos tu negocio en línea, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Ventas Aumentadas" beneficio1="Conecta y expande tu clientela online." beneficiotitulo2="Gestión Simplificada" beneficio2="Nos encargamos de tu sitio web." />
<Services heading="Transforma Tus Recomendaciones en Ventas Digitales" description="Digitalizamos tus ventas en menos de 24 horas con soporte 24/7." services={[{"name":"Desarrollo Web","icon":"globe","description":"Lanza tu sitio rápido y eficiente."},{"name":"SEO Optimización","icon":"search","description":"Aumenta tu visibilidad online."},{"name":"Gestión de Redes","icon":"share","description":"Interactúa y vende en redes sociales."},{"name":"Estrategias de Contenido","icon":"pencil","description":"Contenido que atrae y retiene."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Entiende a tus clientes mejor."},{"name":"Soporte Técnico","icon":"headset","description":"Asistencia 24/7 para tu sitio."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en resultados visualmente impactantes y efectivos." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ofrece una solución completa para llevar tu negocio al mundo online. Creamos y gestionamos sitios web optimizados para atraer más clientes, por lo que no necesitas preocuparte por la parte técnica. Así, puedes concentrarte en lo que mejor haces: tu negocio."},{"pregunta":"¿Qué beneficios obtendré al usar los servicios de WebGo?","respuesta":"Con WebGo, obtienes un sitio web profesional que aumenta tu visibilidad en línea. Esto no solo ayuda a generar más ventas, sino que también mejora la imagen de tu negocio. Además, nos encargamos de todo para que ahorres tiempo y energía."},{"pregunta":"¿Cuánto cuesta el servicio de creación de sitios web de WebGo?","respuesta":"El servicio de creación de sitios web de WebGo tiene un precio competitivo de 123. Este costo incluye el diseño, desarrollo y mantenimiento para que no tengas que preocuparte por nada más."},{"pregunta":"¿Qué pasa si no sé nada sobre ventas online?","respuesta":"No te preocupes, en WebGo somos expertos en ventas online y hacemos todo el trabajo pesado por ti. Diseñamos estrategias efectivas para atraer a más clientes a tu negocio, incluso si eres nuevo en el mundo digital."},{"pregunta":"¿Por qué debería elegir WebGo sobre otras opciones?","respuesta":"WebGo se especializa en ayudar a dueños de pequeños negocios como tú a crecer en el mundo digital. Nuestros servicios están diseñados para ser asequibles, eficientes y completamente personalizados, asegurando que obtengas los mejores resultados sin complicaciones."}]} />
<BookAppointment 
                      heading="Transforma Recomendaciones en Ventas Online" 
                      description="Con WebGo, digitaliza tu negocio sin complicaciones y empieza a vender más. No pierdas más tiempo, ¡haz crecer tu negocio ahora mismo!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
