import supabase from '../../supabaseClient';
import { GetBlogContent, ShowLoading } from '../reducer/fetchBlogContent';

const SetBlogContent = (titleContent) => {
  return (dispatch) => {
    const FetchBlogContent = async () => {
      const { data, error } = await supabase
        .from('BlogContentPost')
        .select()
        .eq('titlePost', `${titleContent}`);

      if (error) {
        console.log(error);
      }

      if (data) {
        dispatch(GetBlogContent(data));
        dispatch(ShowLoading(false));
      }

      if (data.length === 0) {
        dispatch(ShowLoading(true));
      }
    };
    FetchBlogContent();
  };
};

export default SetBlogContent;
