import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'querystring';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 45000,
});

export function setupToken(token) {
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common.Authorization;
  }
}

export async function queryFetch({ endpoint, inputParams }) {
  let params = '';

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      let fetchUrl = endpoint;

      if (params) {
        fetchUrl += `?${params}`;
      }

      const res = await client.get(fetchUrl);
      const json = await res.data;

      resolve(json);
    } catch (e) {
      reject(e.response.data);
    }
  });
}

export async function mutationFetch({ url, method, body, baseURL }) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const res = await client.request({
        ...(!!baseURL && { baseURL }),
        url,
        method,
        data: body,
      });

      const json = await res.data;

      resolve(json);
    } catch (e) {
      reject(e.response.data);
    }
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
