const studyData = {
    disciplinas: {
        matematicas: {
            nombre: "Matemáticas",
            icono: "∫",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Esquema para Matemáticas y Ciencias Cuantitativas</h2>
                <p class="mb-8 text-gray-600">El estudio de las matemáticas es acumulativo. Este esquema está diseñado para construir una base conceptual sólida y una fluidez procedimental impecable, conectando el "porqué" con el "cómo".</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">1. Preparación Pre-Clase (15 min)</h3>
                        <p>Antes de la clase, explora el capítulo. No busques la maestría, sino la familiarización con la terminología y los tipos de problemas. Esto prepara a tu cerebro para asimilar la lección.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">2. Toma de Apuntes Activa en Clase</h3>
                        <p>Usa el <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'cornell')">Método Cornell</button>. Céntrate en los pasos de los problemas de ejemplo y anota las explicaciones verbales del profesor, no solo las ecuaciones.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">3. Inmersión Conceptual Post-Clase</h3>
                        <p>Dentro de las 24h, aplica la <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'feynman')">Técnica Feynman</button> al teorema más importante del día. Explícalo con palabras sencillas para revelar lagunas en tu comprensión.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">4. Resolución de Problemas con Práctica Intercalada</h3>
                        <p>Al hacer las tareas, mezcla problemas de la sección actual con los de secciones anteriores. Esto es más difícil, pero construye una habilidad de resolución de problemas mucho más robusta para los exámenes. Aprende más sobre la <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'intercalada')">Práctica Intercalada</button>.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">5. Consolidación con Repetición Espaciada (Anki)</h3>
                        <p>Crea tarjetas de memoria para definiciones, teoremas, fórmulas y "desencadenantes de problemas" (ej. "un problema de tasas de cambio" -> "pensar en diferenciación implícita"). Usa <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'espaciada')">Repetición Espaciada</button> para memorizar a largo plazo.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">6. Simulación de Exámenes</h3>
                        <p>Trabaja con exámenes de práctica bajo condiciones de tiempo realistas. Por cada error, diagnostica la causa (conceptual, cálculo, etc.) y crea una nueva tarjeta de Anki o vuelve a estudiar el concepto.</p>
                    </div>
                </div>
            `
        },
        economia: {
            nombre: "Economía",
            icono: "📈",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Esquema para Economía</h2>
                <p class="mb-8 text-gray-600">La economía exige un triple dominio: teorías narrativas, modelos gráficos y herramientas cuantitativas. Este flujo de trabajo integra las tres áreas.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">1. Lectura Estratégica con SQ3R</h3>
                        <p>Para textos teóricos densos, usa el método <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'sq3r')">SQ3R (Survey, Question, Read, Recite, Review)</button>. Transforma la lectura pasiva en una investigación activa para deconstruir argumentos complejos.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">2. Síntesis Conceptual con Mapas Mentales</h3>
                        <p>Después de un tema importante (ej. "Política Monetaria"), crea un <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'mapas')">Mapa Mental</button> para conectar visualmente herramientas, objetivos y teorías. Esto te ayuda a ver la "gran imagen".</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">3. Aplicación con Práctica Intercalada</h3>
                        <p>Mezcla deliberadamente problemas de diferentes temas (ej. excedente del consumidor, cálculo del PIB, elasticidad). Esto refleja la naturaleza de los exámenes y el análisis del mundo real.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">4. Consolidación con Repetición Espaciada (Anki)</h3>
                        <p>Crea tres tipos de mazos: (1) Definiciones (Costo de Oportunidad), (2) Modelos/Gráficos (usa la oclusión de imagen para gráficos de oferta/demanda, IS-LM), y (3) Causa y Efecto (ej. "efecto de un aumento del gasto público en la curva DA").</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">5. Integración con la Técnica Feynman</h3>
                        <p>Elige un evento económico del mundo real (ej. un informe de inflación) e intenta explicarlo usando los modelos de tu mapa mental. Esto cierra la brecha entre la teoría abstracta y la realidad.</p>
                    </div>
                </div>
            `
        },
        finanzas: {
            nombre: "Finanzas y Admón.",
            icono: "💼",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Esquema para Finanzas y Administración (Método del Caso)</h2>
                <p class="mb-8 text-gray-600">Estas materias se definen por el método del caso, que exige análisis riguroso de escenarios ambiguos. El objetivo no es la "respuesta correcta", sino un proceso de análisis defendible.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">1. Deconstrucción del Caso (Las 4 "R")</h3>
                        <ul class="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>Read (Leer Rápidamente):</strong> Una lectura de 15 min para captar la narrativa y el dilema central.</li>
                            <li><strong>Re-Read & Research (Releer e Investigar):</strong> Segunda lectura detallada. Subraya hechos, cifras y restricciones. Conecta el caso con las teorías del curso.</li>
                            <li><strong>Relate (Relacionar con un Mapa Mental):</strong> Coloca la decisión central en el medio y crea ramas para Hechos Clave, Stakeholders, Restricciones y Soluciones Potenciales.</li>
                            <li><strong>Resolve (Resolver):</strong> Elige un curso de acción y prepara una justificación, anticipando contraargumentos.</li>
                        </ul>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">2. Dominio de los Modelos (Feynman + Anki)</h3>
                        <p>Usa la <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'feynman')">Técnica Feynman</button> para entender la lógica de modelos como el Flujo de Caja Descontado (DCF). Usa <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'espaciada')">Anki</button> para memorizar las fórmulas y definiciones clave (WACC, sinergias, etc.).</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">3. Participación y Reflexión</h3>
                        <p>Usa tu análisis para contribuir en clase. Después, añade una rama a tu mapa mental con las "Conclusiones de la Clase" para refinar tu marco analítico para el futuro.</p>
                    </div>
                     <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Ejemplo: Flujo de Trabajo para un Modelo de M&A</h3>
                        <table class="w-full text-left text-sm mt-2">
                            <thead class="bg-gray-100"><tr><th class="p-2">Paso</th><th class="p-2">Acción</th></tr></thead>
                            <tbody>
                                <tr class="border-b">
                                    <td class="p-2 font-semibold">1. Supuestos</td>
                                    <td class="p-2">Determinar precio de compra, sinergias y costes de integración.</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="p-2 font-semibold">2. Proyecciones</td>
                                    <td class="p-2">Construir modelos de 3 estados financieros para ambas empresas.</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="p-2 font-semibold">3. Valoración</td>
                                    <td class="p-2">Realizar análisis DCF, de comparables y de transacciones precedentes.</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="p-2 font-semibold">4. Combinación</td>
                                    <td class="p-2">Combinar balances, realizar asignación del precio y calcular el fondo de comercio.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 font-semibold">5. Análisis</td>
                                    <td class="p-2">Calcular el Beneficio Por Acción (BPA) pro forma para determinar si la transacción es acretiva o dilutiva.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        derecho: {
            nombre: "Derecho",
            icono: "⚖️",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Esquema para Derecho</h2>
                <p class="mb-8 text-gray-600">El estudio del derecho requiere memorización de casos, comprensión de reglas y la habilidad de aplicar estas reglas a hechos nuevos. El razonamiento lógico es primordial.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">1. Deconstrucción del Caso (Case Brief)</h3>
                        <p>Este es el primer paso no negociable. Crea un resumen estructurado para cada caso importante. La plantilla es esencial:</p>
                        <table class="w-full text-left text-sm mt-3">
                            <thead class="bg-gray-100"><tr><th class="p-2">Elemento</th><th class="p-2">Descripción</th></tr></thead>
                            <tbody>
                                <tr class="border-b"><td class="p-2 font-semibold">Hechos Materiales</td><td class="p-2">Resumen breve de los hechos relevantes.</td></tr>
                                <tr class="border-b"><td class="p-2 font-semibold">Cuestión Jurídica</td><td class="p-2">La pregunta específica que el tribunal responde (Sí/No).</td></tr>
                                <tr class="border-b"><td class="p-2 font-semibold">Decisión (Holding)</td><td class="p-2">La respuesta directa del tribunal.</td></tr>
                                <tr class="border-b"><td class="p-2 font-semibold">Ratio Decidendi</td><td class="p-2">El principio o regla legal que se deriva del caso (lo más importante).</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">2. Síntesis Doctrinal (Mapas y Diagramas)</h3>
                        <p>Usa <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'mapas')">Mapas Mentales</button> para temas complejos (ej. "Negligencia") y conecta los casos que definen cada elemento. Usa diagramas de flujo para pruebas legales con estructura lógica Sí/No.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">3. Memorización con Repetición Espaciada</h3>
                        <p>Usa <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'espaciada')">Anki</button> para memorizar nombres de casos ("El caracol en la botella" -> Donoghue v Stevenson) y reglas legales precisas.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">4. Aplicación con el Método IRAC</h3>
                        <p>Este es el paso crítico para los exámenes. Ante un problema hipotético, aplica el método IRAC para cada cuestión jurídica que identifiques:</p>
                        <ul class="list-none space-y-1 mt-2 font-mono">
                            <li><span class="font-bold text-[#E0A75E]">I</span>ssue (Cuestión): Plantea la pregunta legal.</li>
                            <li><span class="font-bold text-[#E0A75E]">R</span>ule (Regla): Expón la regla de derecho aplicable.</li>
                            <li><span class="font-bold text-[#E0A75E]">A</span>pplication (Aplicación): Aplica la regla a los hechos del problema.</li>
                            <li><span class="font-bold text-[#E0A75E]">C</span>onclusion (Conclusión): Llega a una conclusión razonada.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        idiomas: {
            nombre: "Idiomas (Inglés)",
            icono: "🇬🇧",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Esquema para Adquisición de Idiomas (Inglés)</h2>
                <p class="mb-8 text-gray-600">Aprender un idioma implica dominar datos discretos (vocabulario, gramática) y desarrollar habilidades activas (hablar, escribir). Este esquema integra ambos aspectos.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">1. Construir la Base con Repetición Espaciada</h3>
                        <p>El uso de <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'espaciada')">Anki</button> es innegociable. Crea mazos para vocabulario (palabra + definición + frase de ejemplo + imagen) y gramática (frases con huecos para rellenar).</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">2. Inmersión Pasiva y Activa</h3>
                        <p>Rodéate del idioma: cambia el idioma de tu teléfono, escucha podcasts y música, y ve series (primero con subtítulos en tu idioma, luego en inglés, y finalmente sin ellos).</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">3. Activar el Conocimiento (Ciclo de Producción)</h3>
                        <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Expresión Oral:</strong> Busca un compañero de intercambio. Intenta explicar un concepto de otra materia (ej. "qué es un DCF") en inglés. Esto fuerza el uso activo del vocabulario.</li>
                            <li><strong>Expresión Escrita:</strong> Mantén un diario en inglés. Resume un artículo de noticias o un podcast que hayas consumido. Es una práctica de bajo riesgo para mejorar la estructura de las frases.</li>
                        </ul>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">4. Integrar Habilidades con Práctica Intercalada</h3>
                        <p>No te centres en una sola habilidad por sesión. Una sesión de 60 min podría ser: 15 min de Anki, 20 min de lectura de noticias, 10 min de resumen escrito y 15 min de escucha de un podcast relacionado.</p>
                    </div>
                </div>
            `
        },
        general: {
            nombre: "Visión General",
            icono: "🚀",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">El Marco General del Aprendizaje Efectivo</h2>
                <p class="mb-8 text-gray-600">Bienvenido al panel de control. El éxito académico no depende del tiempo invertido, sino de la estrategia. Esta aplicación te guiará a través de las técnicas más efectivas, validadas por la ciencia cognitiva y utilizadas en las universidades más prestigiosas del mundo. Comienza seleccionando tu disciplina arriba para un plan personalizado, o explora las técnicas fundamentales para construir tu propio sistema.</p>
                <div class="content-card p-6 rounded-lg shadow-sm">
                    <h3 class="font-bold text-lg mb-2">Comparación de la Eficacia de las Técnicas de Estudio</h3>
                    <p class="text-gray-600 mb-4">No todas las formas de estudiar son iguales. La investigación muestra que las técnicas activas y esforzadas superan con creces a las pasivas como la relectura. Este gráfico ilustra la utilidad general de varias estrategias clave.</p>
                    <div class="chart-container">
                        <canvas id="effectivenessChart"></canvas>
                    </div>
                </div>
            `
        }
    },
    tecnicas: {
        recuperacion: {
            nombre: "Recuperación Activa",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Recuperación Activa (Active Recall)</h2>
                <p class="mb-8 text-gray-600">También conocido como "efecto de prueba", es el principio más transformador en la ciencia del aprendizaje. El acto de esforzarse por recordar información de la memoria fortalece el conocimiento mucho más que la relectura pasiva.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">El Principio</h3>
                        <p>Cada vez que recuperas un dato, refuerzas las vías neuronales asociadas, transfiriendo el conocimiento de la memoria a corto plazo a la de largo plazo. Esto combate la "ilusión de competencia", donde la familiaridad se confunde con el dominio.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Implementaciones Prácticas</h3>
                        <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Autoevaluación:</strong> Genera preguntas a partir de tus apuntes y trata de responderlas sin mirar. Usa exámenes de práctica.</li>
                            <li><strong>Técnica de la Hoja en Blanco:</strong> Después de estudiar un tema, cierra el libro y escribe todo lo que recuerdes en una hoja en blanco.</li>
                            <li><strong>Enseñar a Otros:</strong> Explica el concepto a un compañero (o a un objeto inanimado). Esto te obliga a estructurar y simplificar tu conocimiento.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        feynman: {
            nombre: "Técnica Feynman",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Técnica Feynman</h2>
                <p class="mb-8 text-gray-600">El estándar de oro para asegurar una comprensión genuina. Su premisa es simple: si no puedes explicar algo en términos sencillos, no lo entiendes realmente.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">El Proceso en 4 Pasos</h3>
                        <ol class="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>Seleccionar y Estudiar:</strong> Elige un concepto y estúdialo hasta tener una comprensión básica.</li>
                            <li><strong>Enseñar con Simplicidad:</strong> Escribe una explicación del concepto como si se lo estuvieras enseñando a un niño. Usa analogías y ejemplos simples.</li>
                            <li><strong>Identificar Lagunas:</strong> Revisa tu explicación. ¿Dónde te atascaste? ¿Dónde usaste jerga compleja? Esos son tus vacíos de conocimiento. Vuelve al material original para llenarlos.</li>
                            <li><strong>Refinar y Simplificar:</strong> Reescribe la explicación hasta que sea clara, precisa e intuitiva. Esta explicación final es la materia prima perfecta para crear tarjetas de Anki.</li>
                        </ol>
                    </div>
                </div>
            `
        },
        espaciada: {
            nombre: "Repetición Espaciada",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Repetición Espaciada (Spaced Repetition)</h2>
                <p class="mb-8 text-gray-600">Este método combate la "Curva del Olvido" programando revisiones de la información en intervalos de tiempo crecientes. Es la forma más eficiente de forjar un conocimiento duradero.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">El Principio</h3>
                        <p>Al espaciar las revisiones, permites que el recuerdo se debilite ligeramente, lo que obliga al cerebro a esforzarse más para recuperar la información. Este "esfuerzo deseable" es mucho más eficaz que empollar (cramming).</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Sistemas Prácticos</h3>
                        <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Sistema Leitner (Cajas):</strong> Un sistema manual con tarjetas de memoria y cajas. Las tarjetas correctas avanzan a una caja de revisión menos frecuente; las incorrectas regresan a la primera.</li>
                            <li><strong>Software (Anki, etc.):</strong> Herramientas digitales que automatizan el proceso con un algoritmo, presentándote cada día las tarjetas que estás a punto de olvidar. Es el método más eficaz para grandes volúmenes de información.</li>
                        </ul>
                        <p class="mt-4"><strong>Importante:</strong> La Repetición Espaciada es el <em>horario</em>, la <button class="text-[#E0A75E] font-semibold" onclick="showContent('tecnica', 'recuperacion')">Recuperación Activa</button> es la <em>acción</em>. Deben usarse juntas.</p>
                    </div>
                </div>
            `
        },
        intercalada: {
            nombre: "Práctica Intercalada",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Práctica Intercalada (Interleaved Practice)</h2>
                <p class="mb-8 text-gray-600">Consiste en mezclar diferentes tipos de problemas o temas dentro de una misma sesión de estudio, en lugar de practicar un solo tipo en bloque.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">El Principio</h3>
                        <p>Aunque se siente más difícil durante la sesión, la práctica intercalada conduce a una retención a largo plazo superior. Obliga a tu cerebro a identificar la estructura del problema y a seleccionar la estrategia correcta, en lugar de aplicar mecánicamente el mismo procedimiento. Esto construye habilidades más flexibles y transferibles a un examen.</p>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Aplicación Práctica</h3>
                        <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Matemáticas/Economía:</strong> Al hacer una serie de problemas, mezcla ejercicios del capítulo 5 con algunos del capítulo 3 y 4.</li>
                            <li><strong>Idiomas:</strong> Alterna entre ejercicios de vocabulario, gramática y comprensión lectora en una sola sesión.</li>
                            <li><strong>Advertencia:</strong> Es más efectiva una vez que tienes una comprensión básica de cada tema individual. Puede ser necesaria una práctica inicial en bloque para familiarizarse.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        sq3r: {
            nombre: "Método SQ3R",
             htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Método SQ3R</h2>
                <p class="mb-8 text-gray-600">Un sistema de cinco pasos para transformar la lectura de textos académicos de un acto pasivo a un proceso de investigación activa y comprometida.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Los 5 Pasos</h3>
                        <ol class="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>Survey (Explorar):</strong> Antes de leer, explora el capítulo (títulos, subtítulos, resúmenes) para crear un marco mental.</li>
                            <li><strong>Question (Preguntar):</strong> Convierte cada título en una pregunta. Esto prepara a tu cerebro para buscar respuestas.</li>
                            <li><strong>Read (Leer):</strong> Lee el texto buscando activamente las respuestas a tus preguntas.</li>
                            <li><strong>Recite (Recitar):</strong> Después de cada sección, pausa y recita con tus propias palabras los puntos clave. Es una forma de recuperación activa inmediata.</li>
                            <li><strong>Review (Revisar):</strong> Al finalizar, revisa tus notas y resume el contenido global para consolidar la información.</li>
                        </ol>
                    </div>
                </div>
            `
        },
        cornell: {
            nombre: "Apuntes Cornell",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Sistema de Apuntes Cornell</h2>
                <p class="mb-8 text-gray-600">Un método de toma de apuntes diseñado no solo para registrar información, sino para crear una herramienta de estudio activa que integra la recuperación.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">La Estructura</h3>
                        <p class="mb-4">La página se divide en tres secciones:</p>
                        <div class="overflow-x-auto">
                            <table class="cornell-table">
                                <tbody>
                                    <tr>
                                        <td class="cornell-cues"><strong>Columna de Pistas (Izquierda)</strong><br><br><em>Después de clase, extrae aquí palabras clave, conceptos o preguntas potenciales.</em></td>
                                        <td class="cornell-notes"><strong>Área de Apuntes Principal (Derecha)</strong><br><br><em>Durante la clase, toma aquí tus apuntes de forma concisa.</em></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="cornell-summary"><strong>Área de Resumen (Inferior)</strong><br><br><em>Después de clase, escribe un resumen de 1-2 frases del contenido de la página para forzar la síntesis.</em></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Proceso de Estudio</h3>
                        <p>Para estudiar, cubre el área de apuntes principal y usa la columna de pistas para autoevaluarte. Lee una pista (ej. "Teoría de la Agencia") e intenta explicar el concepto en detalle. Luego, descubre los apuntes para verificar tu respuesta. Es recuperación activa integrada.</p>
                    </div>
                </div>
            `
        },
        mapas: {
            nombre: "Mapas Mentales",
            htmlContent: `
                <h2 class="text-3xl font-bold mb-4">Técnica: Mapas Mentales (Mind Mapping)</h2>
                <p class="mb-8 text-gray-600">Una herramienta visual para organizar información de manera no lineal, reflejando cómo el cerebro establece conexiones. Es ideal para la síntesis y la planificación.</p>
                <div class="space-y-6">
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">Usos Principales</h3>
                        <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Brainstorming:</strong> Plasmar ideas rápidamente sin preocuparse por la estructura.</li>
                            <li><strong>Síntesis de Temas Complejos:</strong> Visualizar la "gran imagen" y las relaciones entre conceptos en materias como derecho o administración.</li>
                            <li><strong>Planificación:</strong> Esquematizar ensayos, proyectos o planes de estudio.</li>
                        </ul>
                    </div>
                    <div class="content-card p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-2">El Proceso</h3>
                        <p>Coloca la idea central en el medio de una página. Dibuja ramas para los subtemas principales. A partir de estas, extiende ramas más pequeñas para los detalles, usando palabras clave, colores e imágenes para reforzar las asociaciones y la memoria.</p>
                    </div>
                </div>
            `
        },
    }
};

const disciplinaSelector = document.getElementById('selector-disciplina');
const tecnicaSelector = document.getElementById('selector-tecnica');
const dynamicContentContainer = document.getElementById('contenido-dinamico');
let currentChart = null;
let activeDisciplineBtn = null;
let activeTecnicaBtn = null;

function createButton(item, key, type) {
    const button = document.createElement('button');
    button.innerHTML = `<span class="text-2xl mr-1">${item.icono || ''}</span> ${item.nombre}`;
    if (type === 'disciplina') {
        button.className = `w-full sm:w-48 font-semibold py-3 px-2 rounded-lg transition-all duration-200 bg-gray-100 hover:bg-[#AD8B73] hover:text-white text-center`;
        button.onclick = () => showContent('disciplina', key);
    } else {
        button.className = `font-semibold py-2 px-4 rounded-lg transition-all duration-200 bg-gray-100 hover:bg-[#AD8B73] hover:text-white`;
        button.onclick = () => showContent('tecnica', key);
    }
    return button;
}

function showContent(type, key) {
    const contentData = (type === 'disciplina') ? studyData.disciplinas[key] : studyData.tecnicas[key];
    
    dynamicContentContainer.style.opacity = '0';

    setTimeout(() => {
        dynamicContentContainer.innerHTML = contentData.htmlContent;
        if (key === 'general') {
            renderEffectivenessChart();
        }
        dynamicContentContainer.style.opacity = '1';
        window.scrollTo({ top: dynamicContentContainer.offsetTop - 80, behavior: 'smooth' });
    }, 300);

    updateActiveButton(type, key);
}

function updateActiveButton(type, key) {
    const buttons = (type === 'disciplina') ? disciplinaSelector.children : tecnicaSelector.children;
    const data = (type === 'disciplina') ? studyData.disciplinas : studyData.tecnicas;
    
    if (type === 'disciplina' && activeTecnicaBtn) {
        activeTecnicaBtn.classList.remove('active-btn');
        activeTecnicaBtn = null;
    }
    if (type === 'tecnica' && activeDisciplineBtn) {
        activeDisciplineBtn.classList.remove('active-btn');
        activeDisciplineBtn = null;
    }

    let activeBtnRef = (type === 'disciplina') ? 'activeDisciplineBtn' : 'activeTecnicaBtn';
    
    if (window[activeBtnRef]) {
        window[activeBtnRef].classList.remove('active-btn');
    }

    let index = Object.keys(data).indexOf(key);
    if (index !== -1 && buttons[index]) {
        window[activeBtnRef] = buttons[index];
        window[activeBtnRef].classList.add('active-btn');
    }
}

function init() {
    Object.keys(studyData.disciplinas).forEach(key => {
        if (key !== 'general') {
            const button = createButton(studyData.disciplinas[key], key, 'disciplina');
            disciplinaSelector.appendChild(button);
        }
    });

    Object.keys(studyData.tecnicas).forEach(key => {
        const button = createButton(studyData.tecnicas[key], key, 'tecnica');
        tecnicaSelector.appendChild(button);
    });
    
    showContent('disciplina', 'general');
}

function renderEffectivenessChart() {
    const ctx = document.getElementById('effectivenessChart');
    if (!ctx) return;
    
    if(currentChart) {
        currentChart.destroy();
    }

    const data = {
        labels: ['Recuperación Activa', 'Práctica Intercalada', 'Repetición Espaciada', 'Técnica Feynman', 'Relectura Pasiva', 'Subrayado Simple'],
        datasets: [{
            label: 'Nivel de Eficacia General',
            data: [95, 90, 88, 85, 20, 15],
            backgroundColor: [
                'rgba(60, 54, 51, 0.8)',
                'rgba(173, 139, 115, 0.8)',
                'rgba(173, 139, 115, 0.7)',
                'rgba(173, 139, 115, 0.6)',
                'rgba(224, 167, 94, 0.5)',
                'rgba(224, 167, 94, 0.4)',
            ],
            borderColor: [
                'rgba(60, 54, 51, 1)',
                'rgba(173, 139, 115, 1)',
                'rgba(173, 139, 115, 1)',
                'rgba(173, 139, 115, 1)',
                'rgba(224, 167, 94, 1)',
                'rgba(224, 167, 94, 1)',
            ],
            borderWidth: 1
        }]
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.x !== null) {
                            let value = context.parsed.x;
                            if(value > 80) label += 'Muy Alta';
                            else if (value > 50) label += 'Alta';
                            else if (value > 30) label += 'Moderada';
                            else label += 'Baja';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%'
                    }
                }
            },
            y: {
                ticks: {
                   font: {
                       size: 14
                   }
                }
            }
        }
    };

    currentChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

document.addEventListener('DOMContentLoaded', init);
