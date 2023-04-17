import { handleAuth } from '@auth0/nextjs-auth0';
import axios from 'axios';

export default handleAuth({
  async callback(req, res) {
    const { user } = await req.auth0.getSession(req);

    if (req.url.startsWith('/api/logout')) {
      await req.auth0.handleLogout(req, res);
      return;
    }

    const { data } = await axios.get(`/api/getUserType?id=${user.sub}`);

    const userType = data.user_type;
    console.log(userType);

    if (userType === 'fan') {
      res.redirect('/Fan/Missions');
    } else if (userType === 'brand') {
      res.redirect('/Brand/Dashboard');
    } else {
      res.redirect('/login');
    }
  },
  async onLogout(req, res) {
    try {
      await req.auth0.handleLogout(req, res);
    } catch (err) {
      console.error(err);
      res.status(err.status || 500).end(err.message);
    }
  },
  async onError(err, req, res) {
    console.error(err);
    res.status(err.status || 500).end(err.message);
  },
  redirectTo: '/login', // Redirect to login page if an unauthenticated user tries to access a protected page
  postLogoutRedirectUri: '/login', // Redirect to login page after successful logout
});