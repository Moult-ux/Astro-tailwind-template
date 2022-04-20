export default {
  name: 'templateBlock',
  title: 'Template  Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'body Text',
      type: 'richText',
    },
    {
      name: 'astroTemplateName',
      title: 'astro Template Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'templateBlockListItem'}],
    },
  ],
}