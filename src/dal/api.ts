export type TrackDetailsResource = {
    id: string
    attributes: TrackDetailsAttributes
}

export type GetTrackDetailsOutput = {
    data: TrackDetailsResource
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
        {
            // headers: {'api-key': '32a3a21e-f1a1-43c4-853f-f20f79379f19'}
        }
    ).then(res => res.json())
    return promise
}

type TrackDetailsAttributes = {
    title: string
    lyrics: string | null
}


type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string
    attachments: TrackAttachment[]
}

export type TrackListItemResource = {
    id: string
    attributes: TrackListItemAttributes
}

export type GetTrackListOutput = {
    data: TrackListItemResource[]
}



export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            // 'api-key': '32a3a21e-f1a1-43c4-853f-f20f79379f19'
        }
    }).then(res => res.json())

    return promise
}