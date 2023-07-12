const menuItems = {
    "Home": "index.html",
    "Klientai": "client.html",
    "Objektai": "Object.html",
    "Duomenų lentelė": "Data.html",
    "Pasiūlymai": "Offer.html",
    "Sutartys": "Agreement.html",
    "Kontaktai": "contacts.html",
    "Gridas": "grid.html",
    "Lenta": "sachmatai.html",
    "Gallery": "grid2.html"
  };
  
  const anchors = document.querySelectorAll("nav a");
  
  anchors.forEach((anchor) => {
    const menuItem = anchor.innerText.trim();
    if (menuItems.hasOwnProperty(menuItem)) {
      anchor.href = menuItems[menuItem];
    }
  });
  