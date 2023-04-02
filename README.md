### Nextjs-jwt-auth boilerplate

Technologies

- Nextjs
- Charka UI
- SWR

I am using this fake data API [fakeapi](https://fakeapi.platzi.com/en/rest/auth-jwt) to get user profile and login.

I am using [middleware](https://nextjs.org/docs/advanced-features/middleware) of nextjs to control the authentication's flow and
using SWR (server state management) to get state from server side and cached it so that it will increase performance instead of using client state management such as Redux.
