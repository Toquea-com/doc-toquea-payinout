<script setup lang="ts">
  import VueMermaidString from 'vue-mermaid-string'

  const diagram = `sequenceDiagram
    actor Usuario
    participant Integrador
    participant Toquea
    participant Banco

    Integrador->>Toquea: Inicia solicitud de Payout
    Toquea->>Banco: Envia la solicitud al banco
    Toquea->>Integrador: Guarda registro de la transacción y comunica al integrador
    Banco->>Toquea: Procesa la solicitud y notifica cualquier cambio
    Toquea->>Integrador: Notifica al integrador
    Banco->>Usuario: Hace llegar el dinero al usuario
    Integrador->>Usuario: Notifica al usuario`
</script>

# Flujo de payout

### El flujo de payout esta descrito en el siguiente gráfico:
<br/>
<VueMermaidString :value="diagram" />
<br/>

1. **El Integrador** inicia una solicitud de Payout enviando la petición a la plataforma **Toquea**.
2. **Toquea** recibe la solicitud y la reenvía al **Banco o Billetera digital** correspondiente para su procesamiento.
3. Simultáneamente, **Toquea** guarda un registro de la transacción y notifica al Integrador que la solicitud ha sido enviada correctamente.
4. Una vez que el Banco procesa la solicitud, devuelve a **Toquea** el estado actualizado de la transacción (por ejemplo, confirmación, rechazo o cualquier cambio en el estado).
5. **Toquea** a su vez notifica al Integrador sobre cualquier cambio en el estado de la transacción.
6. El Banco realiza el pago directamente al Usuario, transfiriendo los fondos correspondientes.
7. Finalmente, **el Integrador** notifica al Usuario que el pago ha sido procesado y el dinero ha sido entregado.