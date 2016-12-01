import React from 'react';

export default function ListPreview({ listId }) {
  return (
    <div className='ListPreviewHeader' style={{width: 200}}>
      {listId}
    </div>
  );
}
