// Created component using fnctional component
// function Error() {
//     return (
//         <div className='text-xl'>
//             Page not found!!
//         </div>
//     )
// }

// export default Error

// Created component using class base component
import React from "react";
import { Link } from "react-router-dom";
class Error extends React.Component {
  // creating state variables
  constructor(props) {
    super(props);
    // state variables
    // this.state = {
    //   count: 1,
    //   time: 0,
    // };
    // console.log("constructor called");
  }

  componentDidMount() {
    // console.log("ComponentDidMount method called");
  }

  componentDidUpdate() {
    //console.log("ComponentDidUpdate method called");
  }

  componentWillUnmount() {
    // console.log(("ComponentWillUnmount method called"));
  }

  render() {
    console.log("Render method called");
    return (
      <div className=" flex flex-col justify-center items-center">
        <img
          src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"
          alt="image"
          className="w-96 h-96"
        />
        <h2 className="my-2">{this.props.name}</h2>
        {/* <h2 className="my-2">Count = {this.state.count}</h2> */}
        {/* <button
          className="bg-red-400 p-2 my-3 rounded-lg"
          onClick={() => {
            this.setState({
              count: 10,
            });
          }}
        >
          count
        </button> */}

        <Link
          to="/"
          className="bg-orange-400 p-2 rounded-md text-lg font-semibold"
        >
          Go to Home page
        </Link>
      </div>
    );
  }
}

export default Error;
