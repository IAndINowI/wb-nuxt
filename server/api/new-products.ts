import {Product} from '~/models/products.model'

const getNewProducts = (products: Product[]) => {
    return products.filter(c => c.label.toLowerCase() === 'new').slice(0, 4)
}

export default defineEventHandler(async (event) => {
    // https://wb-nuxt-default-rtdb.firebaseio.com/data.json
    const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
    await new Promise(resolve => setTimeout(resolve, 1000));
      return getNewProducts(products)
  })

//   export default defineEventHandler(async (event) => {
//     // https://wb-nuxt-default-rtdb.firebaseio.com/data.json
//     const products = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
//     console.log(products);
//       return products
//   })