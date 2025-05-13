# Template para la documentación de toquea

La plantilla de documentación de toque esta diseñada para que puedes publicar tu api y los procesos usando archivos `markdown` y la definición open api en formato `json`.


## Agregar Mermaid

[Mermaid](https://mermaid.js.org/) es una convención bastante extendida para trabajar gráfricos a traves de texto. La mayor ventaja frente a guardarlo como imagen es que podemos hacer seguimiento con git como cada persona interactuo con cada elemento en el grafico.

### Agregar el componente Mermaid

Al inicio de un archivo markdown se debe agregar el siguiente código:

```vue
<script setup lang="ts">
import VueMermaidString from 'vue-mermaid-string'
</script>
```

Lo siguiente es agregar el componente de mermaid dentro del propio markdown:

```markdown
<VueMermaidString :value="`sequenceDiagram
    participant Integrador as Integrador
    participant Toquea as Toquea
    participant Usuario as Usuario

    Integrador->>Toquea: Llama a generate-url con token de autorización
    Toquea-->>Integrador: Devuelve JSON con url e id
    Integrador->>Usuario: Redirige o carga url en iframe
    Usuario->>Toquea: Realiza validación de documentos
    Toquea-->>Integrador: Notifica resultado de validación (por webhook)
    Toquea-->>Integrador: Redirige usuario (si es necesario)
    Integrador->>Usuario: Sigue el proceso`" />
```

con esto se mostrará el gráfico.

