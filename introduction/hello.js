// spa hello world

// h1
// const h1 = document.createElement('h1');
// h1.innerText = 'hello world from js';

// <div id="react-wrapper"><h1><u>hello world from react</u></h1></div>
// const div = React.createElement(
//     'div',
//     {id: "react-wrapper"},
//     React.createElement(
//         'h1', 
//         null,
//         React.createElement(
//             'u', 
//             null, 
//             'hello world from react with underline'
//         )
//     )
// )

// const div = (
//     <div id="react-wrapper">
//         <h1>
//             <u>hello world from react + jsx</u>
//         </h1>
//     </div>
// )

function Hello() {
    return (
        <div id="react-wrapper">
            <h1>
                <u>hello world from react + jsx + component</u>
            </h1>
        </div>
    )
}

// const container = document.getElementById('container');
// container.appendChild(h1);
ReactDOM.render(
    <Hello />,
    document.getElementById('container')
)