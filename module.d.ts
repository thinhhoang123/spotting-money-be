declare namespace NodeJS {
  export interface ProcessEnv {
    JWT_SECRET_KEY: string;
    EXPIRES_TOKEN_IN: string;
    EXPIRES_REFRESH_TOKEN_IN: string;
    JWT_REFRESH_TOKEN_KEY: string;
    DATABASE_URL: string;
  }
}
