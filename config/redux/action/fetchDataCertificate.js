import supabase from '../../supabaseClient';
import { GetCertificate, ShowLoading } from '../reducer/fetchDataCertificate';

const SetCertificate = () => {
  return (dispatch) => {
    const FetchCertificate = async () => {
      const { data, error } = await supabase.from('Certificate').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        dispatch(GetCertificate(data));
        dispatch(ShowLoading(false));
      }
    };
    FetchCertificate();
  };
};

export default SetCertificate;
