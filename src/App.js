import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import Movie from './Movie';




class App extends Component {

    // static propTypes = {
    //     title: PropTypes.string,
    //     poster: PropTypes.string
    // }

    // Render : ComponentWillMount() -> render() ->componentDidMount()

    // Update componentWillReceiveProps() //props를 받음
    // -> shouldComponentUpdate() ===true 이전과 props가 다르면 
    // -> componentWillUpdate()            ex)spinner 빙글빙글 로딩중... 
    // -> render() -> componentDidUpdate()    

    // componentWillMount() {
    //     console.log('will mount')
    // }

    // componentDidMount() {
    //     console.log('did mount')
    // }

    state = {
    }

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {  //내가만든함수는 _를 사용  ,  유저 정의메서드와 네이티브 구분하기위해 사용
        const movies = this.state.movies.map((movie) => {
            return <Movie
                key={movie.id}
                title={movie.title}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis}
            />
        })
        return movies
    }

    _getMovies = async () => {
        const movies = await this._callApi() //await 작업이 완료되기까지는 실행안됨. 동기적
        this.setState({ //위에 await 후 실행
            movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
            .then(res =>
                res.json()
            )
            .then(json =>
                json.data.movies
            )
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        // console.log('did render')
        return (

            <div className={this.state.movies ? "App" : "App--loading"}>
                {(this.state.movies) ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;
