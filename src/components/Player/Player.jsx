import { useEffect, useState, useRef } from "react";
import "./Player.scss";
import useSound from "use-sound";
import Icon from "../Icon";
import music from "../../audio/LP_NewDivide.mp3";
import { memo } from "react";

function Player() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [play, { pause, duration, sound }] = useSound(music);
	const [currTime, setCurrTime] = useState({
		min: "",
		sec: "",
	});
	const [seconds, setSeconds] = useState(0);
	const sec = duration / 1000;
	const min = Math.floor(sec / 60);
	const secRemain = Math.floor(sec % 60);
	const time = {
		min: min,
		sec: secRemain
	}
	const mounted = useRef();
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else {
			if (seconds === 0) {
				setIsPlaying(false);
			}
		}
	}, [seconds]);
	useEffect(() => {
		const interval = setInterval(() => {
			if (sound) {
				setSeconds(sound.seek([]));
				const min = Math.floor(sound.seek([]) / 60);
				const sec = Math.floor(sound.seek([]) % 60);
				setCurrTime({
					min,
					sec,
				});
			}
		}, 1000);
		return () => {
			pause();
			setIsPlaying(false);
			clearInterval(interval);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sound]);
	const playingButton = () => {
		if (isPlaying) {
			pause();
			setIsPlaying(false);
		} else {
			play();
			setIsPlaying(true);
		}
	};

	return (
		<div className="player">
			<h2 className="h2 player__status">Playing Now</h2>
			<div className="player__image-container">
				<img className="player__music-img" src="img/album-2.png" alt="music img" />
			</div>
			<div className="player__music-name">
				<h3 className="h3 player__music-title">Cryptonite</h3>
				<p className="player__music-author">Lorem lorem</p>
			</div>
			<div>
				<div className="player__time">
					<p>
						{currTime.min}:{currTime.sec}
					</p>
					<p>
						{time.min}:{time.sec}
					</p>
				</div>
				<input
					type="range"
					min="0"
					max={duration / 1000}
					default="0"
					value={seconds}
					className="player__time-line"
					onChange={(e) => {
						sound.seek([e.target.value]);
					}}
				/>
			</div>
			<div className="player__btn-conatiner">
				<button className="player__btn" onClick={playingButton}>
					<Icon color="#fff" type="prev" />
				</button>
				{!isPlaying ? (
					<button className="player__btn" onClick={playingButton}>
						<Icon color="#fff" type="play" />
					</button>
				) : (
					<button className="player__btn" onClick={playingButton}>
						<Icon color="#fff" type="pause" />
					</button>
				)}
				<button className="player__btn" onClick={playingButton}>
					<Icon color="#fff" type="next" />
				</button>
			</div>
		</div>
	);

}

export default memo(Player);