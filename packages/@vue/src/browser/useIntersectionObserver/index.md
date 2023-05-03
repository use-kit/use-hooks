# useIntersectionObserver

Provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport

## Usage

```ts
import { useIntersectionObserver } from '@use-kit/vue-hooks'

const el = ref<HTMLDivElement>()

useIntersectionObserver(
  el,
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    console.log('entries', entries)
    console.log('observer', observer)
  }
)
```

```html
<template>
  <div ref="el" />
</template>
```
