import React, { Component } from "react";
import { EditorState, ContentState,convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtmlPuri from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class EditorConvertToHTML extends Component {
   constructor(props) {
      console.log(props);
      const {setDescription} = props;
      super(props);
      const html = "";
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
         const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
         );
         const editorState = EditorState.createWithContent(contentState);
         this.state = {
            editorState,
         };
      }
   }

   onEditorStateChange: Function = (editorState) => {
      this.setState({
         editorState,
      });
   };

   render(props) {
      
      const { editorState } = this.state;
      const htmlPuri = draftToHtmlPuri(
         convertToRaw(this.state.editorState.getCurrentContent())
       );
      console.log(htmlPuri);
      
      return (
         <div>
            <Editor
               editorState={editorState}
               wrapperClassName="demo-wrapper"
               editorClassName="demo-editor"
               onEditorStateChange={this.onEditorStateChange}
               
            />
         </div>
      );
   }
}

export default EditorConvertToHTML;
