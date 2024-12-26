const loginSelectors = {
    loginPage: '/login',
    userNameSelector: 'input[name="email"]', 
    passwordSelector: 'input[name="password"]', 
    loginButton: '[data-qa="login-button"]', 
    userIcon: 'a:has(i.fa-user)',
    userNameText: 'Cypress',
  };
  
  export default loginSelectors;