import { useEffect, useState } from "react";
import "./Player.scss";
import useSound from "use-sound";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { activeAlbumChanged } from "../../store/audioSlice/audioSlice.js";
import Icon from "../Icon";
import { memo } from "react";

const audioTracks = [
	"audio/Scorpions_Wind_Of_Change.mp3",
	"audio/Scorpions_Still_Loving_You.mp3",
	"audio/PR_Not_Listening.mp3",
	"audio/LP_In_The_End.mp3",
	"audio/LP_Faint.mp3",
	"audio/LP_Numb.mp3",
	"audio/LP_NewDivide.mp3",
	"audio/BMTH_Can_You_Feel_My_Heart.mp3",
	"audio/BMTH_Throne.mp3",
	"audio/PR_Last_Resort.mp3",
	"audio/S_Comatose.mp3",
	"audio/S_Monster.mp3",
];

function Player() {
	const goods = useSelector(state => state.goods.products, shallowEqual);
	const dispatch = useDispatch();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSong, setCurrentSong] = useState(audioTracks[0]);
	const [play, { pause, stop, duration, sound }] = useSound(currentSong);
	const [currTime, setCurrTime] = useState({
		min: 0,
		sec: 0,
	});
	const [seconds, setSeconds] = useState(0);
	const sec = duration / 1000;
	const min = Math.floor(sec / 60);
	const secRemain = Math.floor(sec % 60);
	const time = {
		min: min,
		sec: secRemain
	}

	useEffect(() => {
		if (goods.length > 0) {
			setCurrentSong(() => {
				return audioTracks[activeIndex];
			});
			dispatch(activeAlbumChanged(goods[activeIndex].productCode));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, goods, activeIndex]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (sound) {
				const songSec = sound.seek([]);
				setSeconds(typeof songSec === 'number' ? songSec : 0);
				const min = Math.floor(sound.seek([]) / 60);
				const sec = Math.floor(sound.seek([]) % 60);
				setCurrTime({
					min: min ? min : 0,
					sec: sec ? sec : 0,
				});
			}
		}, 1000);
		return () => {
			stop();
			setIsPlaying(false);
			return clearInterval(interval);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sound]);
	const playingButton = () => {
		if (isPlaying) {
			pause();
			setIsPlaying(false);
		} else if (sound) {
			play();
			setIsPlaying(true);
		}
	};

	const prevButton = () => {
		stop();
		setIsPlaying(false);
		if (activeIndex > 0) {
			setActiveIndex(prev => prev - 1);
		}
	};

	const nextButton = () => {
		stop();
		setIsPlaying(false);
		if (activeIndex < goods.length - 1) {
			setActiveIndex(prev => prev + 1);
		}
	};

	return (
		<div className="player">
			<h2 className="h2 player__status">Playing Now</h2>
			<div className="player__image-container">
				<img className="player__music-img" src={goods.length > 0 ? goods[activeIndex].imgSrc : ""} alt="music img" />
			</div>
			<div className="player__music-name">
				<h3 className="h3 player__music-title">{goods.length > 0 ? goods[activeIndex].name : ""}</h3>
				<p className="player__music-author">{goods.length > 0 ? goods[activeIndex].text : ""}</p>
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
				<button className="player__btn" onClick={prevButton}>
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
				<button className="player__btn" onClick={nextButton}>
					<Icon color="#fff" type="next" />
				</button>
			</div>
		</div>
	);

}

export default memo(Player);