# useArrayPool

Reactive array pool

## Usage

```ts
import { useArrayPool } from '@use-kit/vue-hooks'

const { pool, addPoolItem } = useArrayPool<number>(3)
addPoolItem(1)
addPoolItem(2)
addPoolItem(3)
addPoolItem(4)

console.log(pool.value) // [2, 3, 4]
```
