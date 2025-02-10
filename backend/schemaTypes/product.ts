import {defineType} from 'sanity'

export const Product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'price', title: 'Price', type: 'number'},
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Fruits & Vegetables', value: 'fruits-vegetables'},
          {title: 'Dairy & Eggs', value: 'dairy-eggs'},
          {title: 'Meat & Seafood', value: 'meat-seafood'},
          {title: 'Bakery', value: 'bakery'},
          {title: 'Beverages', value: 'beverages'},
          {title: 'Frozen Foods', value: 'frozen-foods'},
          {title: 'Snacks & Sweets', value: 'snacks-sweets'},
          {title: 'Canned & Packaged Goods', value: 'canned-packaged'},
          {title: 'Health & Wellness', value: 'health-wellness'},
          {title: 'Personal Care', value: 'personal-care'},
          {title: 'Baby Care', value: 'baby-care'},
          {title: 'Pet Supplies', value: 'pet-supplies'},
        ],
        layout: 'dropdown',
      },
    },

    {name: 'image', title: 'Image', type: 'image'},
    {name: 'stock', title: 'Stock', type: 'number'},
    {
      name: 'precinct',
      title: 'Precinct',
      type: 'string',
      options: {
        list: [
          {title: 'Precinct 1', value: 'Precinct 1'},
          {title: 'Precinct 2', value: 'Precinct 2'},
          {title: 'Precinct 5', value: 'Precinct 5'},
          {title: 'Precinct 10', value: 'Precinct 10'},
          {title: 'Precinct 12', value: 'Precinct 12'},
          {title: 'Precinct 35', value: 'Precinct 35'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
  ],
})
