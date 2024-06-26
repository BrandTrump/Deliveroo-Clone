import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Featured Menu Categories',
  name: 'featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      title: 'Resturants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'restaurant'}}],
    }),
  ],
})
