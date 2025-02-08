import {useLocation} from "react-router-dom";
import ReactPlayer from "react-player";

export default function ExamResponse() {
    const location = useLocation();
    const {summary, topic_summaries, video_url} = location.state || {};
    return (
        <>
            <div>
                <h2>Summary</h2>
                <p>{summary}</p>
                <h2>topic Summary</h2>
                <p>{topic_summaries}</p>

                <h2>Generated Video</h2>
                {video_url ? (
                    <ReactPlayer url={video_url} />
                ) : (
                    <p>No video generated.</p>
                )}
            </div>
        </>
    )
}
