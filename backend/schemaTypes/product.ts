import {defineType} from 'sanity'

export const Product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'price', title: 'Price', type: 'number'},
    {name: 'category', title: 'Category', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'stock', title: 'Stock', type: 'number'},
  ],
})
