import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './withFetchLoading.scss';

const withFetchLoading = WrappedComponent =>
  class extends React.Component {
    render() {
      return this.props.isFetching ? (
        <CircularProgress
          classes={{ colorPrimary: 'withFetchLoading__Spinner' }}
        />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default withFetchLoading;
