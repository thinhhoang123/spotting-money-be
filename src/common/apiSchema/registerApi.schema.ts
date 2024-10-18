const RegisterApiSchema = {
  schema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
};

export default RegisterApiSchema;
