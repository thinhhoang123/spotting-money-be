const CreateCategoryApiSchema = {
  schema: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
      },
      categories: {
        type: 'array',
        example: [{ title: 'category 1' }, { title: 'category 2' }],
      },
    },
  },
};

export default CreateCategoryApiSchema;
