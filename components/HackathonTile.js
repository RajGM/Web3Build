import { useState, useEffect } from 'react';
import ModalButton from './Modal';

export default function TestTile({ data }) {
    const [dataToshow, setDataToshow] = useState(data.eventN);

    useEffect(() => {
        setDataToshow(data.eventN);
    }, [data.eventN]);

    return (
        <div className="eventTile">
            <div className="space"></div>
            <div>
                <img src="https://hackharvard.io/static/media/HH22_logo_transparent_square.ebd93df1c22cd9cfd0ae.png" alt="title" className="iconLogo" />
            </div>
            <div style={{ overflow: "hidden", textAlign: 'center', maxHeight: '20px' }}>
                <a href={data.link} onMouseEnter={() => setDataToshow(data.link)} onMouseLeave={() => setDataToshow(data.eventN)} target="_blank">{dataToshow} </a>
                <img src="export.png" alt="title" className="redirectIcon" onMouseEnter={() => setDataToshow(data.link)} onMouseLeave={() => setDataToshow(data.eventN)} />
            </div>
            <div>
                Application Starts:{data.appS}
            </div>
            <div>
                {data.appE ? "Application Ends: " + data.appE : "Application Ends: Not Specified"}
            </div>
            <div>
                {data.eventS ? "Hacking Starts: " + data.eventS : "Hacking Starts: Not Specified"}
            </div>
            <div>
                {data.eventE ? "Hacking Starts: " + data.eventE : "Hacking Ends: Not Specified"}
            </div>
            <div className="rowFlex">
                <div>
                    <button title='Upvote' disabled='true'>Like</button>
                </div>
                <div>
                    {data.Real}
                </div>
                <div>
                    {data.Spam}
                </div>
                <div>
                    <button title='Mark Spam' disabled='true'>Closed</button>
                </div>
            </div>
            <div >
                <ModalButton eventData={data} />
            </div>
            <div className="space"></div>
            <div className="rowFlex itemCenter">
                <div className='margin-right'>
                    Posted by {data.postedBy}
                </div>
            </div>
        </div>
    );
}
