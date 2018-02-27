
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyATRQy3-kf0tZ-zF188KXsPTd-asxt3NI4';


//below is the functional based component where there is no states


class App extends Component {

    constructor(props) {
        super(props);

        this.state ={videos: [],
        selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term},  (videos) => {
            this.setState({videos: videos,
             selectedVideo: videos[0]
            });
            console.log(videos);
         });
    }
    
    render(){
            const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div> 
                <SearchBar onSearchTermChange={videoSearch} />
                {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> */}
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                videos={this.state.videos}
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));