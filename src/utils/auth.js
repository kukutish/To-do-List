export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const loginStorage = () => {
  localStorage.setItem('isAuthenticated', 'true');
};

