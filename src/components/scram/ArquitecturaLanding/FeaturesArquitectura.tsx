import React from "react";

const FeaturesArquitectura = () => {
  return (
    <section className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Servicios de Arquitectura de Software</h2>
          <div className="bar"></div>
          <p>Desarrollo de aplicaciones empresariales escalables y seguras con tecnología de clase mundial</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="flaticon-coding" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Desarrollo Web y Móvil</h3>
              <p>Aplicaciones modernas con React, Next.js, React Native para todas las plataformas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="flaticon-cloud-computing" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Infraestructura Cloud</h3>
              <p>Despliegue en AWS, Azure, Google Cloud con arquitecturas escalables y seguras</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="flaticon-artificial-intelligence" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Integración de IA</h3>
              <p>Machine Learning, análisis predictivo y automatización inteligente de procesos</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="flaticon-api" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>APIs y Microservicios</h3>
              <p>Arquitecturas distribuidas con Node.js, Python, Docker y Kubernetes</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="flaticon-structure" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Integración de Sistemas</h3>
              <p>Conexión con ERP, CRM y sistemas legacy para unificar operaciones</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="flaticon-security-1" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Seguridad Avanzada</h3>
              <p>Protección de datos, autenticación segura y cumplimiento normativo</p>
            </div>
          </div>
        </div>

        {/* Tecnologías Section */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Stack Tecnológico de Clase Mundial</h3>
              <p>Utilizamos las tecnologías más modernas y demandadas del mercado</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          {/* Frontend Technologies */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box" style={{ minHeight: '280px' }}>
              <div className="image">
                <i className="bx bx-desktop" style={{ fontSize: '50px', color: '#61dafb' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Frontend & UI/UX</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>React</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Next.js</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>TypeScript</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Vue.js</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Angular</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box" style={{ minHeight: '280px' }}>
              <div className="image">
                <i className="bx bx-server" style={{ fontSize: '50px', color: '#68a063' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Backend & APIs</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Node.js</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Python</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Django</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>FastAPI</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Java Spring</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>.NET Core</span>
              </div>
            </div>
          </div>

          {/* Mobile Technologies */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box" style={{ minHeight: '280px' }}>
              <div className="image">
                <i className="bx bx-mobile-alt" style={{ fontSize: '50px', color: '#ff9900' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Mobile Apps</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>React Native</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Flutter</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>iOS Native</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Android Native</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Expo</span>
              </div>
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box" style={{ minHeight: '280px' }}>
              <div className="image">
                <i className="bx bx-cloud" style={{ fontSize: '50px', color: '#ff9900' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Cloud & Hosting</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>AWS</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Azure</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Google Cloud</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>DigitalOcean</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Vercel</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Netlify</span>
              </div>
            </div>
          </div>

          {/* DevOps & CI/CD */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box" style={{ minHeight: '280px' }}>
              <div className="image">
                <i className="bx bx-git-branch" style={{ fontSize: '50px', color: '#0db7ed' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>DevOps & CI/CD</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Docker</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Kubernetes</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>GitHub Actions</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Jenkins</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Terraform</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>GitLab CI</span>
              </div>
            </div>
          </div>

          {/* Databases & Storage */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box" style={{ minHeight: '280px' }}>
              <div className="image">
                <i className="bx bx-data" style={{ fontSize: '50px', color: '#336791' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Bases de Datos</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>PostgreSQL</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>MongoDB</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>MySQL</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Redis</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Elasticsearch</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>Firebase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios Section */}
        <div className="row" style={{ marginTop: '60px', background: '#f8f9fa', padding: '50px 0', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Beneficios que Transforman tu Negocio</h3>
              <div className="bar"></div>
              <p>Resultados medibles y comprobados en cada proyecto</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ background: '#f8f9fa', paddingBottom: '50px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-rocket" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Mayor eficiencia operativa</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Automatización de procesos clave que reducen hasta 70% el tiempo de operaciones manuales</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-trending-up" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Escalabilidad garantizada</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Arquitecturas cloud-native que crecen con tu negocio sin límites técnicos</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-shield-alt-2" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Seguridad de datos empresarial</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Protección con estándares ISO 27001 y cumplimiento GDPR/LGPD</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-dollar-circle" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>ROI comprobado en 6-12 meses</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Reducción de costos operativos y aumento de productividad del 40-60%</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-support" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Soporte y mantenimiento 24/7</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Monitoreo continuo y actualizaciones constantes para evolución sin interrupciones</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-happy-heart-eyes" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Experiencia de usuario superior</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Interfaces intuitivas que aumentan la satisfacción y retención de usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesArquitectura;
