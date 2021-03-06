import React, { useState } from 'react';
import useDocumentHook from './useDocumentHook';

const DocumentTwo = () => {
    const [count, setCount] = useState(0);

    useDocumentHook(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count - {count}</button>
        </div>
    );
};

export default DocumentTwo;
