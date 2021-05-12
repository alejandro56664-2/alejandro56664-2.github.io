# alejandro56664-adl.github.io
Blog personal

Por limitaciones de conocimiento propias, preferí dejar en la raíz el sitio publico y la fuente usando Gatsby se encuentra en el directorio ```__gatsby-src```.
Para realizar un cambio se debe hacer lo siguiente:

```
cd __gatsby-src
```


```
npm install
```

El contenido en markdown se encuentra en la ruta: ```__gatsby-src/content/posts``` aquí se debe agregar todo el contenido. Una vez agregado y/o modificado, se debe ejecutar
el siguiente comando:

```
npm run publish
```

El cuál generará el sitio estático nuevamente y reemplazará los archivos que cambien en la raíz. No es lo mas eficiente, pero por el momento funciona.

