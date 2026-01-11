import {TrackList} from "./ui/TrackList.tsx";
import {TrackDetail} from "./ui/TrackDetail.tsx";
import {useTrackSelection} from "./bll/useTrackSelection.tsx";

export function MainPage() {

    const { trackId, setTrackId } = useTrackSelection();

    const handleTrackItem = (id: string | null) => {
        setTrackId(id)
    }

    return (
        <>
            <div style={{display: 'flex', gap: '30px'}}>
                <TrackList
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackItem}
                />
                <TrackDetail trackId={trackId}/>
            </div>
        </>

    )
}