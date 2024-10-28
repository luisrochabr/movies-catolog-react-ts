export class Config {
  static apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  static apiKey = process.env.REACT_APP_API_KEY || '123456';
}
