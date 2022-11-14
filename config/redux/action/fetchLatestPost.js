import supabase from '../../supabaseClient';
import { GetLatestPost, ShowLoading } from '../reducer/fetchLatestPost';

const SetLatestPost = () => {
  return (dispatch) => {
    const FetchLatestPost = async () => {
      const { data, error } = await supabase
        .from('BlogContentPost')
        .select()
        .order('id', { ascending: false });

      if (error) {
        console.log(error);
      }

      if (data) {
        dispatch(GetLatestPost(data));
        dispatch(ShowLoading(false));
      }
    };
    FetchLatestPost();
  };
};

export default SetLatestPost;
