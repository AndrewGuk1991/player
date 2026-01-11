import {PageTitle} from "./PageTitle.tsx";
import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";
import styles from './TracksList.module.css'

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId: string | null) => void
}

export function TrackList({onTrackSelect, selectedTrackId}: Props) {
    const {tracks} = useTracks()

    if (tracks === null) {
        return (
            <div>
                <PageTitle/>
                <span>Loading...</span>
            </div>
        )
    }

    const handleReset = () => {
        onTrackSelect?.(null)
    }

    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId)
    }

    return (
        <div>
            <button onClick={handleReset}>
                reset
            </button>
            <hr/>
            <ul className={styles.tracks}>
                {
                    tracks.map((track) => {
                            return (
                                <TrackItem
                                    key={track.id}
                                    track={track}
                                    onSelect={handleClick}
                                    isSelected={track.id === selectedTrackId}
                                />
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}