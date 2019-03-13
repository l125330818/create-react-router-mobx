import Loadable from 'react-loadable';
/**
 * 参数：路由路径
 */
export default path =>Loadable({
    loader: () => import(`../pages/${path}`),
    loading: ()=><div>loading...</div>
});
