import { connect } from "react-redux";
import { useEffect } from "react";

import NewsCard from "./NewsCard";
import { fetchHeadlines } from '../redux/actions/getTopHeadlines'
import './home.css'

const Home = (props) => {
   // console.log(props.fetchHeadlines())

   useEffect(() => {
      props.fetchHeadlines()
   }, [])

   console.log(props.state)
   return (
      <div className="home">
         {
            props.state ? props.state.data.map((article) => {
               return <NewsCard author={article.author} desc={article.description} title={article.title} img={article.urlToImage} content={article.content} />
            }) : 'loading...'
         }
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      state: state
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchHeadlines: () => dispatch(fetchHeadlines())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);