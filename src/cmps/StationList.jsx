import { LikedSongsPreview } from "./LikedSongsPreview"
import { StationPreview } from "./StationPreview"

export function StationList({ stations, user }) {
  

    if (!stations) return <h1>Loading...</h1>
    return (
        <section className="station-list">
                {user?.likedSongs.length > 0 && <LikedSongsPreview user={user}/>}
                {stations.map(station => {
                    return (
                        <StationPreview key={station._id} station={station} />
                    )
                })}
        </section>
    )
}