# useIntersectionObserver

Provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport

## Usage

```tsx
import { useIntersectionObserver } from '@use-kit/react-hooks'

const el = useRef<HTMLDivElement>(null)

useIntersectionObserver(
  el.current,
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    console.log('entries', entries)
    console.log('observer', observer)
  }
)

return (
  <div>
    <div ref={el} />
  </div>
)
```
