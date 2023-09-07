import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

function Editor() {
  const [content, setContent] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  return (
    <div>
     
      <CKEditor
        editor={ ClassicEditor }
        data={ content }
        onChange={ handleEditorChange }
      />
      {/* <textarea
        value={ content }
        onChange={ (event) => setContent(event.target.value) }
      /> */}
    </div>
  );
}

export default Editor;