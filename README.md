# TagBrain
TagBrain es un modelo de clasificación de textos en español entrenado en Brain.js. Este clasificador simple y básico tiene la capacidad de analizar textos y determinar si son positivos o negativos. Es una herramienta para comprender rápidamente el sentimiento asociado a un texto en español.

El proyecto se basa en redes neuronales recurrentes LSTM (Long Short-Term Memory) y ofrece dos versiones del modelo: una para ejecutarse en entornos de Node.js y otra adaptada para su uso directamente en navegadores web.

## Caracteristicas del modelo

TagBrain fue entrenado utilizando un conjunto de datos compuesto por 150 ejemplos en total. Estos ejemplos abarcaron una variedad de textos en español recopilados de internet, tanto positivos como negativos, lo que permitió al modelo aprender a distinguir entre ambos tipos.

Durante el entrenamiento, se utilizaron diferentes configuraciones para optimizar el rendimiento del modelo. Se estableció un límite máximo de longitud de predicción en 2 caracteres, lo que significa que el modelo proporcionará una respuesta clasificada dentro de ese límite.

La estructura de las capas ocultas fue configurada con [96, 96], lo que indica que se utilizaron dos capas ocultas, cada una con 96 neuronas. Se eligió la función de activación "leaky-relu" para proporcionar no linealidad en las salidas de las neuronas.

Para el proceso de aprendizaje, se utilizó una tasa de aprendizaje de 0.002, lo que influye en la velocidad y precisión con la que el modelo se adapta a los datos de entrenamiento. TagBrain se entrenó durante 250 iteraciones, lo que permite ajustar los pesos y los sesgos de las neuronas en cada ciclo de entrenamiento, y cuando el proceso se completo, el modelo obtuvo un umbral de error de 0.011681594408230207.

Es importante destacar que el entrenamiento se realizó utilizando la versión gratuita de Google Colab, lo que proporcionó una infraestructura computacional accesible para entrenar el modelo. El entrenamiento completo llevó aproximadamente 4481 segundos (alrededor de 74.7 minutos).

Como resultado de este proceso, TagBrain es capaz de clasificar textos en español como positivos o negativos. Las salidas del modelo se simplificaron a dos emojis: "👍" para indicar un sentimiento positivo y "👎" para indicar un sentimiento negativo.

## Requisitos previos

### Para Node.js

- Descarga el modelo "TagBrain.json" ubicado en la carpeta "models" y asegúrate de tenerlo en tu directorio de trabajo.
- Instala las bibliotecas de Brain.js y gpu.js utilizando npm:

```
npm install gpu.js
npm install brain.js@2.0.0-beta.18
```

Aquí hay un ejemplo básico de cómo utilizar el modelo en Node.js:

```
const brain = require("brain.js"); // Llamamos la libreria de Brain.js
const modelo = require("./TagBrain.json"); // Ruta al archivo TagBrain.json

// Creamos la instancia de la red neuronal
const net = new brain.recurrent.LSTM();

// Cargamos el modelo entrenado
net.fromJSON(modelo);

// Hacemos una predicción e imprimimos el resultado en la consola
const resultado = net.run("Me encanta este video ❤"); // El resultado debe ser '👍'
console.log(resultado);

```

### Para el navegador

- Descarga el modelo "TagBrain.json" ubicado en la carpeta "models".
- Descarga la versión de Brain.js para navegador, puedes descargarlo [aquí](https://unpkg.com/brain.js@2.0.0-beta.23/dist/browser.js)

En el archivo HTML, asegúrate de incluir los scripts necesarios:

```
<script src="brain.js"></script>
<script src="TagBrain.js"></script>
```

En el archivo JavaScript correspondiente, puedes utilizar el modelo de la siguiente manera:

```
const net = new brain.recurrent.LSTM();

// Cargamos el modelo entrenado
net.fromJSON(tagBrainAi); // 'tagBrainAi' es la variable que almacena la red neuronal en TagBrain.js

// Hacemos una predicción y la imprimimos en la consola
const resultado = net.run("Me encanta este video ❤"); // El resultado debe ser '👍'
console.log(resultado);

```

## Diviertete clasificando

Gracias por visitar el proyecto TagBrain.
