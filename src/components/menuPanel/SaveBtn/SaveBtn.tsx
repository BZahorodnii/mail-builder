import React from 'react';
import pretty from 'pretty';
import fs from 'fs';
import remote from 'remote';

const SaveBtn: React.FC = () => {
  const onSave = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const template = document.getElementById('template').innerHTML;
    const prettyTemplate = pretty(template);
    console.log(prettyTemplate);
    // const elements: any = prettyTemplate.querySelectorAll('[data-structure]');
    // console.log(elements);
  }

  return (
    <div>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default SaveBtn;