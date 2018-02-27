import React, { VideoHTMLAttributes } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoListItem = props.videos.map((video) => {
        return( 
        <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });

    return(
        <ul className="col-md-4" list-group>
        {videoListItem}
        </ul>
    );
}

export default VideoList;