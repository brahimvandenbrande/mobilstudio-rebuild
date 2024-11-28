const HeroBlock = {
    slug: 'hero',
    fields: [
      {
        name: 'heading',
        type: 'text',
        required: true,
      },
      {
        name: 'subheading',
        type: 'text',
      },
      {
        name: 'backgroundImage',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'buttonText',
        type: 'text',
      },
      {
        name: 'buttonLink',
        type: 'text',
      },
    ],
  };
  
  export default HeroBlock;
  