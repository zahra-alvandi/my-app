// import React, { Component } from 'react'

// export default class User react.component {
//     render() {
//         return(
//             <div>
//                 <h1>Zahra</h1>
//             </div>
//         )
//     }
// }

function User(props) {
    console.log(props);
    
    return(
        <div>
            {/* <h1>Zahra</h1> */}
            <h1>{props.name}</h1>
        </div>
    )
}

export default User