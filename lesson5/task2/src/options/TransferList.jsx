import React from 'react';
import { connect } from 'react-redux';
import { optionsListSelector } from './options.selectors';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available option" />
      <SelectedOptions title="Selected option" />
    </div>
  );
};

export default TransferList;
