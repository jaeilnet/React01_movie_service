import React from "react"

class Movie_Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if(location.state === undefined){
      history.push("/")
    }
  }
  render() {
    const { location } = this.props
    if(location.state){
      return <span>{location.state.title}</span>
    }else{
      return null;
    }
  }
}
export default Movie_Detail 