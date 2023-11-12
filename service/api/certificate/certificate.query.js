import { useQuery } from '@tanstack/react-query';

import { queryFetch } from '../../../config/queryClient';

export function GetCertificate({ sizeData, pageData }) {
  return useQuery({
    queryKey: ['certificate'],
    queryFn: async () => {
      return await queryFetch({
        endpoint: 'certificate',
        inputParams: {
          size: sizeData,
          page: pageData,
        },
      });
    },
  });
}
