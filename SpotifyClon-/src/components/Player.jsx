import { useState } from 'react'

export const Pause = () => (
    <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="black"  stroke="black"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg>
)

export const Play = () => (
<svg width="24"  height="24"  viewBox="0 0 24 24"  fill="black"  stroke="black"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
)

export function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useState()

    // useEffect(() => {
        //audioRef.current.src = `/music/1/01.mp3`
    // }, [])

    const handleClick = () => {
        if(isPlaying) {
            audioRef.current.pause()
        }
        else {
            audioRef.current.src = `/music/1/01.mp3`
            audioRef.current.play()
            audioRef.current.volume = 0.1
        }

        setIsPlaying(!isPlaying)
    }
    return (
        <div className="flex flex-row justify-between w-full px-4 z-50">
            <div>
                CurrentSong
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button className="bg-white rounded-full p-2" onClick={handleClick}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                </div>
            </div>
            <div className='grid place-content-center'>
                Volumen
            </div>

            <audio ref={audioRef} />
        </div>
    )
}
