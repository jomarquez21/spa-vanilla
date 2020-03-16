import Header from './../templates/header';
import Home from './../page/home';
import Character from './../page/character';
import Error404 from './../page/error404';
import getHash from './../utils/getHash';
import resolveRoutes from './../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  'contact': 'Contact',
}

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
}

export default router;