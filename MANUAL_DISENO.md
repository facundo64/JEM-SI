# MANUAL DE DISEÑO Y ARQUITECTURA VISUAL - JEM-SI

Este documento define las directrices maestras de diseño de UI/UX para el sitio web corporativo de JEM-SI (Construcción y Montaje Metalúrgico). Ante las revisiones, este manual dicta una dirección **estrictamente minimalista, clara y sobria**.

## 1. Identidad Visual y Sistema de Diseño (Minimalismo y Claridad)

*   **Paleta Dominante (Escala de Grises y Blancos):** 
    Se debe priorizar una paleta clara y luminosa para que la página tenga vida, luz espacial y respire amplitud (no "apagada").
    *   **Blanco Técnico y Gris Claro:** Dominantes absolutos en fondos del 90% de las secciones.
    *   **Gris Acero/Antracita:** Para tipografías, líneas divisorias muy finas y alto contraste. Transmite peso, calidad y dureza.
*   **Color de Acento (Naranja Industrial Mate - NO NEÓN):** 
    Uso **EN CUENTAGOTAS ABSOLUTO**. Estrictamente reservado para detalles mínimos (una fina línea indicadora, un puntaje o un mínimo efecto hover). No se permiten efectos de brillo (glow), gradientes saturados o botones naranjas invasivos. Cero saturación a la vista.

*   **Tipografía:**
    *   Títulos: `Montserrat` (Bold/ExtraBold). Limpia y con buen tracking (espaciado).
    *   Cuerpo y Números: `Rajdhani` para un look de ingeniería y precisión geométrica.

## 2. Arquitectura del Sitio y Dirección de Arte

1.  **INICIO (Hero Fotográfico y Vivo):** 
    *   Debe contar con una **IMAGEN INICIAL GIGANTE Y CLARA** en el centro/fondo. Esto le dará muchísima vida a la web frente al usuario.
    *   Nada de fondos sólidos oscuros. La fotografía de la obra/estructura metálica debe dominar la escena inicial, transmitiendo realidad.
2.  **SERVICIOS / VALORES / PROYECTOS:** 
    *   Estructuras esquemáticas y minimalistas, priorizando legibilidad. 
    *   Uso excesivo de espacios en blanco (aire).
    *   Las fotos de los proyectos dictan los colores, la UI retrocede y sirve solo de marco o paspartú.
3.  **FORMAS:** Radios de borde (`border-radius`) en 0px sostenido. Ángulos rectos y afilados. Evita cualquier sensación plástica o redondeada.

## 3. Animaciones y Micro-Interacciones (Ultra-Sobrias)

Para dotar al sitio de interacción extrema sin rayar en la exageración:

1.  **Preloader "Corte Láser" Mejorado (Blanco):** 
    Híper-minimalista. Una *sola línea fina en color BLANCO* atraviesa la pantalla limpiamente. Eliminada toda variante naranja en la carga inicial. Tras la línea, la imagen inmensa del hero hace su aparición.
2.  **Cursor de Precisión:** 
    Sutil, blanco y negro (mix-blend) sin resplandores ni rellenos de color.
3.  **Efecto Magnético en Botones (Leve):**
    Los botones reaccionan a la proximidad del cursor (se sienten pesados y magnéticos), pero en un rango contenido y estricto.
4.  **Scroll Reveal (Aparición Estructural):**
    Elemento a elemento van apareciendo pesadamente desde abajo hacia arriba al scrollear, de forma rápida, sin delays prolongados que corten la fluidez ("snappy").
5.  **Eliminación de Glows/Neones:**
    Queda TERMINANTEMENTE PROHIBIDO el uso de brillos "neon", tarjetas brillantes o destellos simulados (`ShineCard` y similares quedan descartados por saturar la vista).

## 4. Directrices Técnicas y de Refactorización

*   **Eliminación de Neón:** Limpiar el archivo `globals.css` y variables de Tailwind de todo naranja saturado o fondo glow.
*   **Hero Section:** Requerirá integrar una etiqueta `<img>` o clase de background que ilumine y despierte la primera vista del usuario.
*   **Animación Inicial:** El estado inicial del `Preloader` se basará en trazos blancos y fondos grises neutros limpios.