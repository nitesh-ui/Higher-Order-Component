import React from "react";

const Destructing = ({name, heroName }) => {
    return(
        <div>
            <h3>
                Hello {name} a.k.a {heroName}
            </h3>
        </div>
    )
}

// class Destructing extends Component {
//     render() {
//         const {name, heroName} = this.props
//         return(
//             <h3>Welcome {name} a.k.a {heroName}</h3>
//         )
//     }
// }

export default Destructing