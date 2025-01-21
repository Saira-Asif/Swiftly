import {defineType} from 'sanity'

export const Rider = defineType({
  name: 'rider',
  title: 'Rider',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'phone', title: 'Phone', type: 'string'},
    {name: 'zone', title: 'Zone', type: 'reference', to: [{type: 'deliveryZone'}]},
  ],
})
