let progress=document.getElementById('progress');
let song=document.getElementById('song');
let ctrlIcon=document.getElementById('control-icon');
song.onloadedmetadata=function(){                         //progrss bar+song link
        progress.max=song.duration;
        progress.value=song.currentTime;
        }
        function playPause(){
            if(ctrlIcon.classList.contains("fa-pause")){
                song.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
            }
            else{
                song.play();
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");

            }
        }
        if(song.play()){
            setInterval(()=>{                           //update the bar
                progress.value=song.currentTime;
            },500);
        }
        progress.onchange=function(){
            song.play();
            song.currentTime=progress.value;
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");

        }