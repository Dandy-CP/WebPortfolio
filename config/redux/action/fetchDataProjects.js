import supabase from '../../supabaseClient';
import { GetProjects, ShowLoading } from '../reducer/fetchDataProjects';

const SetMyProjects = () => {
  return (dispatch) => {
    const FetchMyProject = async () => {
      const { data, error } = await supabase
        .from('MyProjects')
        .select()
        .order('id', { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        dispatch(GetProjects(data));
        dispatch(ShowLoading(false));
      }
    };
    FetchMyProject();
  };
};

export default SetMyProjects;
