import Card from "./Card";
import IconoHtml from "../images/logos/iconoHtml.png";
import IconoCss from "../images/logos/iconoCss.png";
import IconoBootstrap from "../images/logos/iconoBootstrap.png";
import IconoTailwind from "../images/logos/iconoTailWindCSS.png";
import IconoJavaScript from "../images/logos/iconoJavaScript.png";
import IconoReact from "../images/logos/iconoReact.png";
import SeparatingLine from "../images/lineaSeparadora.png";
import IconoJava from "../images/logos/iconoJava.png";
import IconoSpringboot from "../images/logos/iconoSpringboot.png";
import IconoPhp from "../images/logos/iconoPhp.png";
import IconoLaravel from "../images/logos/iconoLaravel.png";
import IconoGit from "../images/logos/iconoGit.png";
import IconoDocker from "../images/logos/iconoDocker.png";
import IconoMySql from "../images/logos/iconoMysql.png";
import IconoPostgreSql from "../images/logos/iconoPostgresql.png";
import IconoSqLite from "../images/logos/iconoSqlite.png";
import IconoMongoDB from "../images/logos/iconoMongodb.png";
import "../styles/technologies-style.css";

function Technologies() {
  const frontendTechnologies = [
    {
      id: 1,
      name: "HTML",
      description:
        "Es el lenguaje de marcado utilizado para estructurar y organizar el contenido en la web. Define los elementos básicos como encabezados, párrafos, imágenes y enlaces dentro de una página web.",
      icon: IconoHtml,
    },
    {
      id: 2,
      name: "CSS",
      description:
        "Es un lenguaje de estilo que se usa para controlar la apariencia y el diseño de las páginas web. Permite modificar colores, tipografía, márgenes, disposición de los elementos y mucho más.",
      icon: IconoCss,
    },
    {
      id: 3,
      name: "Bootstrap",
      description:
        "Es un framework de código abierto que proporciona herramientas y componentes predefinidos para crear sitios web responsivos y con un diseño atractivo. Facilita el desarrollo de interfaces de usuario mediante CSS y JavaScript.",
      icon: IconoBootstrap,
    },
    {
      id: 4,
      name: "TailWindCSS",
      description:
        "Es un framework CSS que utiliza clases utilitarias para crear diseños personalizados de manera rápida. A diferencia de otros frameworks, Tailwind se centra en la flexibilidad y el control total sobre el diseño sin imponer estilos predeterminados.",
      icon: IconoTailwind,
    },
    {
      id: 5,
      name: "JavaScript",
      description:
        "Es un lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web. Se usa para manipular el contenido HTML y CSS, así como para interactuar con el servidor y responder a las acciones del usuario.",
      icon: IconoJavaScript,
    },
    {
      id: 6,
      name: "React",
      description:
        "Es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Se basa en componentes que gestionan su propio estado y actualizan la interfaz de forma eficiente mediante un virtual DOM.",
      icon: IconoReact,
    },
  ];

  const backendTechnologies = [
    {
      id: 1,
      name: "Java",
      description:
        "Lenguaje de programación orientado a objetos, robusto y multiplataforma, utilizado en aplicaciones empresariales, móviles y web. Su máquina virtual (JVM) permite ejecutar el mismo código en distintos sistemas operativos sin modificaciones.",
      icon: IconoJava,
    },
    {
      id: 2,
      name: "Springboot",
      description:
        "Framework basado en Java que facilita la creación de aplicaciones web y microservicios con configuraciones automáticas. Incluye herramientas como inyección de dependencias, seguridad y manejo de bases de datos para optimizar el desarrollo.",
      icon: IconoSpringboot,
    },
    {
      id: 3,
      name: "PHP",
      description:
        "Lenguaje de programación interpretado y ampliamente utilizado en desarrollo web para generar contenido dinámico en servidores. Su facilidad de integración con bases de datos y compatibilidad con HTML lo hacen ideal para aplicaciones web.",
      icon: IconoPhp,
    },
    {
      id: 4,
      name: "Laravel",
      description:
        "Framework de PHP que sigue el patrón MVC y proporciona herramientas avanzadas para el desarrollo web, como migraciones, autenticación y enrutamiento. Su sintaxis elegante y enfoque modular agilizan la creación de aplicaciones escalables y mantenibles.",
      icon: IconoLaravel,
    },
  ];

  const otherTools = [
    {
      id: 1,
      name: "GIT",
      description:
        "Sistema de control de versiones distribuido que permite gestionar y rastrear cambios en el código, facilitando la colaboración entre desarrolladores.",
      icon: IconoGit,
    },
    {
      id: 2,
      name: "Docker",
      description:
        "Plataforma para crear, distribuir y ejecutar aplicaciones en contenedores, asegurando que el software funcione de manera consistente en cualquier entorno.",
      icon: IconoDocker,
    },
    {
      id: 3,
      name: "MySQL",
      description:
        "Sistema de gestión de bases de datos relacional (RDBMS) de código abierto, ampliamente usado en aplicaciones web y empresariales por su rendimiento y estabilidad.",
      icon: IconoMySql,
    },
    {
      id: 4,
      name: "PostgreSQL",
      description:
        "Base de datos relacional avanzada y de código abierto, conocida por su robustez, extensibilidad y cumplimiento con estándares SQL.",
      icon: IconoPostgreSql,
    },
    {
      id: 5,
      name: "SQLite",
      description:
        "Base de datos relacional ligera y embebida, ideal para aplicaciones móviles o de escritorio que requieren almacenamiento sin un servidor dedicado.",
      icon: IconoSqLite,
    },
    {
      id: 6,
      name: "MongoDB",
      description:
        "Base de datos NoSQL basada en documentos, que almacena datos en formato JSON flexible, permitiendo escalabilidad y alta disponibilidad.",
      icon: IconoMongoDB,
    },
  ];

  return (
    <main className="main-container-technologies">
      <section className="section-container-technologies">
      <div className="separating-line" id="technologies"><img src={SeparatingLine} alt="" /></div>
        <h2>Tecnologías —</h2>
        <h3 className="spacing-title">Tecnologías Frontend:</h3>
        <section className="technologies-tools-languages">
          {frontendTechnologies.map(({ id, name, description, icon }) => (
            <Card key={id} name={name} description={description} icon={icon} />
          ))}
        </section>
        <h3 className="spacing-title">Tecnologías Backend:</h3>
        <section className="technologies-tools-languages">
        {backendTechnologies.map(({ id, name, description, icon }) => (
            <Card key={id} name={name} description={description} icon={icon} />
          ))}
        </section>
        <h3  className="spacing-title">Otras Herramientas:</h3>
        <section className="technologies-tools-languages">
        {otherTools.map(({ id, name, description, icon }) => (
            <Card key={id} name={name} description={description} icon={icon} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Technologies;
