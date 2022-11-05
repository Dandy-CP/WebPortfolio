import supabase from '../../supabaseClient';
import { GetCardProjects, ShowLoading } from '../reducer/fetchDataProjectsCard';

const SetCardProjects = () => {
  return (dispatch) => {
    const FetchMyProject = async () => {
      const { data, error } = await supabase
        .from('MyProjects')
        .select()
        .limit(3)
        .order('id', { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        dispatch(GetCardProjects(data));
        dispatch(ShowLoading(false));
      }
    };
    FetchMyProject();
  };
};

export default SetCardProjects;
