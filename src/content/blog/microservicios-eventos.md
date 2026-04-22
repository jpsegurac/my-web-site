---
title: "Construyendo Microservicios con Eventos usando Kafka y Node.js"
description: "Un recorrido práctico para diseñar una arquitectura orientada a eventos resiliente usando Apache Kafka, cubriendo estrategias de particionamiento, grupos de consumidores y patrones de manejo de errores."
pubDate: 2026-03-15
category: "Arquitectura"
tags: ["Kafka", "Node.js", "Microservicios", "Eventos"]
featured: true
readTime: 8
lang: "es"
---

Las arquitecturas orientadas a eventos desacoplan productores de consumidores, permitiendo escalado independiente y tolerancia a fallos. En este artículo construiremos un pipeline de eventos listo para producción usando Kafka y Node.js.

## ¿Por qué Kafka?

La arquitectura basada en log de Kafka significa que los eventos se almacenan de forma duradera y pueden reproducirse. A diferencia de las colas tradicionales, los consumidores mantienen su propio offset — así un nuevo servicio puede procesar todos los eventos históricos desde el primer día.

## Configurando el Productor

```typescript
import { Kafka } from "kafkajs";

const kafka = new Kafka({ brokers: ["localhost:9092"] });
const producer = kafka.producer();

await producer.send({
  topic: "user.transactions",
  messages: [{ key: userId, value: JSON.stringify(event) }],
});
```

## Grupos de Consumidores

Los grupos de consumidores permiten escalar horizontalmente. Cada partición es consumida por exactamente un miembro del grupo, por lo que agregar consumidores escala el rendimiento de forma lineal hasta el número de particiones.

## Conclusión

Los patrones orientados a eventos aumentan la complejidad pero dan resultados en resiliencia y escalabilidad. Comienza con un contrato claro de esquema de eventos e invierte en observabilidad desde el primer día.
