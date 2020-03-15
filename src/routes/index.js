import Header from './../templates/header';
import Home from './../page/home';
import Character from './../page/character';
import Error404 from './../page/error404';

const routes = {
  '/': Home,
  '/:id': Character,
  'contact': 'Contact',
}

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
}

export default router;