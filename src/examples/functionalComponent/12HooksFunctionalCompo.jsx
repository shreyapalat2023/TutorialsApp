import React from 'react';

const HooksFunctionalCompo = () => {
    return (

        <>
        <h3>Hooks in ReactJS</h3>
            <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
            <p> This page describes the APIs for the built-in Hooks in React.</p>
            <p>The concept of Hooks in React was introduced in early 2019 and for the last few years has been a commonly used utility in the world of React development.</p>
            <p> React Hooks aim to solve the difficulties of logic reuse by enabling us to write functional components that have access to features like state, context, lifecycle methods, ref, etc. without having to write a class component.</p>
            <ul>
                <li>
                    <p><a href="#basic-hooks">Basic Hooks</a></p>
                    <ul>
                        <li><a href="#usestate"><code className="gatsby-code-text">useState</code></a> <span>useState is a React Hook that lets you add a state variable to your component.</span> </li>
                        <li><a href="#useeffect"><code className="gatsby-code-text">useEffect</code></a><span>useEffect is a React Hook that lets you synchronize a component with an external system.</span></li>
                        <li><a href="#uselayouteffect"><code className="gatsby-code-text">useLayoutEffect</code></a></li>
                        <li><a href="#useref"><code className="gatsby-code-text">useRef</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#additional-hooks">Additional Hooks</a></p>
                    <ul>
                        <li><a href="#usecallback"><code className="gatsby-code-text">useCallback</code></a></li>
                        <li><a href="#usememo"><code className="gatsby-code-text">useMemo</code></a></li>
                        <li><a href="#useimperativehandle"><code className="gatsby-code-text">useImperativeHandle</code></a></li>
                        <li><a href="#usedebugvalue"><code className="gatsby-code-text">useDebugValue</code></a></li>
                        <li><a href="#usedeferredvalue"><code className="gatsby-code-text">useDeferredValue</code></a></li>
                        <li><a href="#usetransition"><code className="gatsby-code-text">useTransition</code></a></li>
                        <li><a href="#useid"><code className="gatsby-code-text">useId</code></a></li>
                        <li><a href="#usecontext"><code className="gatsby-code-text">useContext</code></a></li>
                        <li><a href="#usereducer"><code className="gatsby-code-text">useReducer</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#library-hooks">Library Hooks</a></p>
                    <ul>
                        <li><a href="#usesyncexternalstore"><code className="gatsby-code-text">useSyncExternalStore</code></a></li>
                        <li><a href="#useinsertioneffect"><code className="gatsby-code-text">useInsertionEffect</code></a></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default HooksFunctionalCompo;