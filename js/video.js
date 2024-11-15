var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    const video = document.querySelector("video");
    const slider = document.querySelector("#slider");
    video.play();
    video.volume = slider.value / 100;
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	const video = document.querySelector("video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    const video = document.querySelector("#player1");
    video.playbackRate *= 0.9;
    console.log('The Speed is:' , video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    const video = document.querySelector("#player1");
    video.playbackRate /= 0.9;
    console.log('The Speed is:', video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    const video = document.querySelector("#player1");
    const newTime = video.currentTime + 10
	if (newTime >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = newTime;
    }
});

document.querySelector("#mute").addEventListener("click", function() {
    const video = document.querySelector("#player1");
    const button = document.querySelector("#mute");
    if (video.muted) {
        video.muted = false;
        button.textContent = "Mute";
    } else {
        video.muted = true;
        button.textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    const video = document.querySelector("#player1");
    const volumeDisplay = document.querySelector("#volume");

    video.volume = this.value / 100;
    volumeDisplay.textContent = this.value;
});

document.querySelector("#vintage").addEventListener("click", function() {
    const video = document.querySelector("#player1");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    const video = document.querySelector("#player1");
    video.classList.remove("oldSchool");
});