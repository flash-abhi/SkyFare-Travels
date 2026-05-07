// API Configuration
// In production, use relative URLs so nginx proxies /api to the backend
// In development, use localhost:5001 (backend server default)

const isDevelopment = process.env.NODE_ENV === 'development';

export const API_URL = isDevelopment 
  ? 'http://localhost:5001' 
  : 'https://sandybrown-quail-376160.hostingersite.com/';  // Production uses same-origin /api routes through Hostinger

export const SOCKET_URL = isDevelopment
  ? 'http://localhost:5001'
  : 'https://sandybrown-quail-376160.hostingersite.com/';  // Production websocket uses the same domain

export default API_URL;
