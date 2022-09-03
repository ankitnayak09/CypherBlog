import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const QuillTextEditor = () => {

    const QuillNoSSRWrapper = dynamic(import('react-quill'), {
        ssr: false,
        loading: () => <p>Loading ...</p>,
    })

    return (
        <QuillNoSSRWrapper  theme="snow" />
    )
}

export default QuillTextEditor;