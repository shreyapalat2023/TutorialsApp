import React from 'react';

const LazyLoadingIntQueCompo = () => {
    return (
        <>
            <h1 className='text-center shadow mt-5'> Lazy Loading Questions</h1>
            {/*--------------------------------------------------- Question One---------------------------------------------------------- */}
            <h3><button className='bd-red shadow'>1</button>  What is lazy loading in React, and why is it important?</h3>
            <p>It helps to<mark>optimize the performance</mark>  of Rect applications. The data is only rendered when visited or scrolled. It can be images, scripts, etc. </p>
            <p>Lazy loading can be helpful in applications that have high-resolution images or data that alters the loading time of the application.</p>
            <p>Lazy loading is a technique in React that allows you to load components, modules, or assets asynchronously, improving the loading time of your application. React provides a built-in <mark>React.lazy()</mark>  method and Suspense component to achieve lazy loading.</p>
            {/*---------------------------------------------------- Question Two-------------------------------------------------------- */}
            <h3><button className='bd-red shadow'>1</button> How do you implement lazy loading in a React component?</h3>
            <p><strong>Syntax for Lazy Loading:</strong></p>
            <div className='alert alert-info p-3'>
                const MyComponent = React.lazy(() =&gt; import('./MyComponent'));
            </div>
            <h3>Steps to Implement Lazy Loading </h3>





        </>
    );
};

export default LazyLoadingIntQueCompo;