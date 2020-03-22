import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './withLoading.scss';

const withLoading = WrappedComponent =>
  class extends React.Component {
    render() {
      return this.props.isFetching ? (
        <CircularProgress classes={{ colorPrimary: 'withLoading__Spinner' }} />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default withLoading;
