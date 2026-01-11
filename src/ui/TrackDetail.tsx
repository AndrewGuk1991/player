import {useTrackDetail} from "../bll/useTrackDetail.tsx";

import styles from './TrackDetail.module.css'

type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {

    const {trackDetails} = useTrackDetail(trackId);

    return (
        <div className={styles.track}>
            <h2>Details</h2>
            {!trackDetails && !trackId && <div>Track is not selected</div>}
            {!trackDetails && trackId && <div>Loading...</div>}
            {trackDetails && trackId && trackId !== trackDetails.id && <div>Loading...</div>}
            {trackDetails && (
                <div>
                    <h3>{trackDetails.attributes.title}</h3>
                    <h4>Lyrics:</h4>
                    <p>{trackDetails.attributes.lyrics || 'no lyrics'}</p>
                </div>

            )}
        </div>
    )
}