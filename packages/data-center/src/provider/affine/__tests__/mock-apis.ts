import type { Apis, AccessTokenMessage } from '../apis';

const user: AccessTokenMessage = {
  create_at: Date.now(),
  exp: 100000000,
  email: 'demo@demo.demo',
  id: '123',
  name: 'demo',
  avatar_url: 'demo-avatar-url',
};

export const apis = {
  signInWithGoogle: () => {
    return Promise.resolve(user);
  },
  createWorkspace: mate => {
    return Promise.resolve({ id: 'test' });
  },
} as Apis;
