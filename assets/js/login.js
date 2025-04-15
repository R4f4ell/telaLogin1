document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Simulação de login
    alert(`Bem-vindo, ${username}!`);
  });
  