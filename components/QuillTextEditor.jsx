import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const QuillTextEditor = () => {

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

    return (
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" className='w-4/5 mx-auto h-80 min-h-full' />

    )
}

export default QuillTextEditor;