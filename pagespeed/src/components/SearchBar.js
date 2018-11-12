import React from 'react';
import { connect } from 'react-redux';
import Creatable from 'react-select/lib/Creatable';
import { fetchReport, selectReport } from '../actions';

class SearchBar extends React.Component {
  onCreateOption = url => {
    this.props.fetchReport(url);
  };

  onChangeOption = option => {
    if (option.value) {
      this.props.selectReport(option.value);
    }
  };

  render() {
    const options = this.props.reports.map(report => {
      return { label: report.id, value: report.id };
    });

    return (
      <div className="search-bar ui segment">
        <div className="ui form">
          <Creatable
            onChange={this.onChangeOption}
            options={options}
            onCreateOption={this.onCreateOption}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reports: { data, loading, error } }) => {
  return {
    reports: data,
    loading,
    error
  };
};

export default connect(
  mapStateToProps,
  { fetchReport, selectReport }
)(SearchBar);