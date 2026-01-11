import {useEffect, useState} from "react";
import {getTrack, type TrackDetailsResource} from "../dal/api.ts";

export function useTrackDetail(trackId: string | null) {
    const [trackDetails, setTrackDetail] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!trackId) {
            setTrackDetail(null)
            return
        }

        getTrack(trackId)
            .then(json => setTrackDetail(json.data))
    }, [trackId])

    return {
        trackDetails
    }
}