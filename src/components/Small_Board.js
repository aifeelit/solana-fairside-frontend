import React, { Component } from 'react';

import '../assets/scss/governance.scss';

const Small_Board = (props) => {
    return (
        <div>
            {props.state ? (
                <div className="governance__card d-flex align-items-center" style={{ height: '86px' }} >
                    <div className='d-flex'>
                        <img src={props.src} height={36}></img>
                        <div className='px-2'>
                            <label>{props.title}</label>
                            {props.value}
                        </div>
                    </div>
                </div>) : (
                <div className="px-3 py-3 governance__card mb-4 shadow bg-white d-flex align-items-center" style={{ borderRadius: '8px', height: '86px' }} >
                    <div className='d-flex'>
                        <img src={props.src} height={36}></img>
                        <div className='px-2'>
                            <label>{props.title}</label>
                            Success
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default Small_Board;

// class Small_Board extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }
//     componentDidMount() {
//     }
//     render() {
//         return (
//             <div>
//                 <h1>sdlfkjsdf</h1>
//             </div>
//         )
//     }
// }
// export default Small_Board;