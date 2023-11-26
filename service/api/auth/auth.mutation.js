import { useMutation } from '@tanstack/react-query';

import { mutationFetch } from '../../../config/queryClient';

export function Login(options) {
  return useMutation({
    mutationFn: async (body) => {
      return await mutationFetch({
        url: 'auth/login',
        method: 'POST',
        body: {
          username: body.username,
          password: body.password,
        },
      });
    },
    ...options,
  });
}
