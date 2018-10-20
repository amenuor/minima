// @flow

/**
 * Asynchronously loads the component
 */
import Loadable from 'react-loadable';
import LoadingIndicator from '../../presentational/Spinner';

export default Loadable<{}>({
  loader: () => import('./index'),
  loading: LoadingIndicator
});