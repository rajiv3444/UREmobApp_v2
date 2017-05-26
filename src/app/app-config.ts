export interface AppConfig {
  apiEndpoint: string;
  title: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.testApi.com',
  title: 'Dependency Injection'
};
