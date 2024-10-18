const LoginApiSchema = {
  schema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        example: 'abc@gmail.com',
      },
      password: {
        type: 'string',
        example: '123456',
      },
    },
  },
};
export default LoginApiSchema;
