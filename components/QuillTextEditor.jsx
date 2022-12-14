import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const QuillTextEditor = () => {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: [] }],
            ['align'],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
            ],
            ['code-block','link', 'image'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    }

    const formats = [
        'header',
        'font',
        'size',
        'align',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image'
    ]

    const QuillNoSSRWrapper = dynamic(import('react-quill'), {
        ssr: false,
        loading: () => <p>Loading ...</p>,
    })

    const handleChangeInput=(value)=>{
        console.log(value)
        // setValue(value)
    }
    const editor=useRef(null)

    return (
        <QuillNoSSRWrapper ref={editor} onChange={(e)=>{handleChangeInput(e)}}   modules={modules}  formats={formats} theme="snow" className='w-4/5 mx-auto h-80 min-h-full my-5' />

    )
}

export default QuillTextEditor;