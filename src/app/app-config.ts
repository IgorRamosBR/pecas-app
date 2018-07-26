export interface ApplicationConfig {
  apiEndpoint: string;
  oauthApiEndpoint: string;
 }
  
  // Configuration values for our app
export const MY_CONFIG: ApplicationConfig = {
  apiEndpoint: 'http://localhost:3000',
  oauthApiEndpoint: 'http://localhost:8080'
 };
