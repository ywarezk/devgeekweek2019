import React from 'react';

// this.props = {msg: 'sdfs', someObject: {...}}
export default class HelloClass extends React.Component {
    state = {
        isVisible: true,       
        hello: 'world',
        foo: 'bar' 
    }

    // constructor(props) {
    //     super(props);
    //     // this is the instance
    //     this.toggleVisibility = this.toggleVisibility.bind(this);
    // }
    
    /**
     * make h3 show/hide
     * // this is undefined?
     */
    toggleVisibility = () => {
        // alert('hello from class');

        this.setState({
            isVisible : !this.state.isVisible
        });
    }

    // string
    // number
    // null
    // boolean
    // <div> ... </div>
    // Array<above> => [null, 0, false, <div>... </div>]
    render() {

        return (
            <>
                <h1>
                    Hello world
                </h1>
                {
                    // if (this.state.isVisible) {
                    //     <h3>
                    //         {this.props.msg}
                    //     </h3> 
                    // }
                    // this.state.isVisible ? (
                    //     <h3>
                    //          {this.props.msg}
                    //      </h3>
                    // ) : null

                    this.state.isVisible && (
                        <h3>
                            {this.props.msg}
                        </h3>
                    )
                }
                       
                <button onClick={this.toggleVisibility}>Toggle visibility</button>
            </>
            
        )
    }
}