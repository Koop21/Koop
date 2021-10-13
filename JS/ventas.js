const $navBar = document.querySelector("menu2"),
 $ulBar = document.querySelector("li"),
 $template = document.getElementById("template-nav").content,
 $fragment = document.createDocumentFragment(),
 menu = [
    {
      pagina: "Inicio",
      link: "index.html"
    },
    {
      pagina: "Ventas",
      link: "ventas.html"
    },
    {
      pagina: "Productos",
      link: "productos.html"
    },
    {
      pagina: "Vendedoes",
      link: "vendedores"
    },
    {
      pagina: "Usuarios",
      link: "usuarios.html"
    },
    {
      pagina: "Log in",
      link: "index.html"
    }
  ];

menu.forEach(el => {
  $template.querySelector("a").setAttribute("href",el.link);
  $template.querySelector("a").textContent = el.pagina;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$navBar.appendChild($fragment);
document.body.appendChild($navBar);
