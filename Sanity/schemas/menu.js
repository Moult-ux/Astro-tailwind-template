export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'menuName',
      title: 'Menu Name',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'menuItem'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}