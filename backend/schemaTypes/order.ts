import {defineType} from 'sanity'

export const Order = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {name: 'customerName', title: 'Customer Name', type: 'string'},
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    },
    {name: 'totalPrice', title: 'Total Price', type: 'number'},
    {name: 'status', title: 'Status', type: 'string'},
    {name: 'date', title: 'Date', type: 'datetime'},
  ],
})
