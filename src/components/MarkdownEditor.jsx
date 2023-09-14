import React, {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({onContentChange}) => {
    const editorRef = useRef();
    let editor = null;

    useEffect(() => {
         editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            onContentChange(content);

        });
        return () => {
            if (editor) {
                editor.removeHook('change');
                editor = null;
            }
        }
    }, [onContentChange])


    return <div ref={editorRef}/>
}


export default MarkdownEditor