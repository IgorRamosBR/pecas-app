export interface ApplicationConfig {
  apiEndpoint: string;
  oauthApiEndpoint: string;
 }
  
  // Configuration values for our app
export const MY_CONFIG: ApplicationConfig = {
  apiEndpoint: 'http://localhost:3000',
  oauthApiEndpoint: 'http://ec2-18-212-48-205.compute-1.amazonaws.com:8080'
 };
