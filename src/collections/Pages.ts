import { CollectionConfig } from 'payload/types';
import HeroBlock from '../blocks/HeroBlock';
import TextImageBlock from '../blocks/TextImageBlock';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public access to read pages
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        HeroBlock,
        TextImageBlock,
        // Add block definitions here (e.g., HeroBlock, TextImageBlock, etc.)
      ],
    },
  ],
};

export default Pages;