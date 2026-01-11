import type {TrackListItemResource} from "../dal/api.ts";
import styles from './TracksList.module.css'
import clsx from "clsx";

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemResource

}

export const TrackItem = ({onSelect, track, isSelected }: Props) => {
    const handleClick = () => {
        onSelect?.(track.id)
    }

    const obj = {
        [styles.track] : true,
        [styles.selected]: isSelected
    }

    const className = clsx(obj)

    return (
        <li className={className} key={track.id}>
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio controls src={track.attributes.attachments[0].url}/>
        </li>
    )
}