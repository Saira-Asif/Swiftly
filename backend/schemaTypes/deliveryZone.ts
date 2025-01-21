import {defineType} from 'sanity'

export const deliveryZone = defineType({
  name: 'deliveryZone',
  title: 'Delivery Zone',
  type: 'document',
  fields: [
    {name: 'name', title: 'Zone Name', type: 'string'},
    {name: 'postalCodes', title: 'Postal Codes', type: 'array', of: [{type: 'string'}]},
  ],
})
