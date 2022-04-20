export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageTitle',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'blockList',
      title: 'blockList',
      type: 'array',
      of: [{type: 'templateBlock'}],
    },    
  ],
}