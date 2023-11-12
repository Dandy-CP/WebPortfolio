import { useQuery } from '@tanstack/react-query';

import { queryFetch } from '../../../config/queryClient';

export function GetProjects({ sizeData, pageData }) {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      return await queryFetch({
        endpoint: 'my-projects',
        inputParams: {
          size: sizeData,
          page: pageData,
        },
      });
    },
  });
}
