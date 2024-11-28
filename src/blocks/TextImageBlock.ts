const TextImageBlock = {
    slug: 'text-image',
    fields: [
      {
        name: 'heading',
        type: 'text',
        required: true,
      },
      {
        name: 'content',
        type: 'textarea',
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'imagePosition',
        type: 'radio',
        options: [
          {
            label: 'Left',
            value: 'left',
          },
          {
            label: 'Right',
            value: 'right',
          },
        ],
        defaultValue: 'left',
      },
    ],
  };
  
  export default TextImageBlock;
  