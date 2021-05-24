const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    url = baseURL + "?type=track&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTracks(data));
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    url = baseURL + "?type=album&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayAlbums(data));
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    url = baseURL + "?type=artist&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayArtist(data[0]));
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
const displayArtist = (art) => {
    if (art == null){
        document.querySelector("#artist").innerHTML = "no artist found";
    } else{
        template = `<section class="artist-card" id="${art.id}" onclick="displayTracksOfArtist(event)">
                        <div>
                            <img src="${art.image_url}">
                            <h3>${art.name}</h3>
                            <div class="footer">
                                <a href="${art.spotify_url}" target="_blank">
                                    view on spotify
                                </a>
                         </div>
                        </div>
                    </section>`;
        document.querySelector('#artist').innerHTML = template;
    }
};

const displayTracks = (t) => {
    if (t[0] == null){
        document.querySelector("#tracks").innerHTML = "no tracks found";
    } else{
        document.querySelector("#tracks").innerHTML = ""
        const lentracks = t.length;
        for (let i = 0; i < Math.min(5,lentracks); i++){
            if(t[i].preview_url == null){
                template = `<section class="track-item preview" >
                                <img src="${t[i].album.image_url}">
                                <div class="label">
                                    <h3>${t[i].name}</h3>
                                    <p>
                                        ${t[i].artist.name}
                                    </p>
                                </div>
                            </section>`;
            } else{
                template = `<section class="track-item preview" data-preview-track="${t[i].preview_url}" onclick="playAudio(event)">
                            <img src="${t[i].album.image_url}">
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h3>${t[i].name}</h3>
                                <p>
                                    ${t[i].artist.name}
                                </p>
                            </div>
                        </section>`;
            }
            document.querySelector('#tracks').innerHTML += template;
        }
    }
};
const displayAlbums = (alb) => {
    if (alb[0] == null){
        document.querySelector("#albums").innerHTML = "no albums found";
    } else{
        document.querySelector("#albums").innerHTML = ""
        for (let a = 0; a < alb.length; a++){
            template = `<section class="album-card" id="${alb[a].id}" onclick="displayTracksOfAlbum(event)">
                            <div>
                                <img src="${alb[a].image_url}">
                                <h3>${alb[a].name}</h3>
                                <div class="footer">
                                    <a href="${alb[a].spotify_url}" target="_blank">
                                        view on spotify
                                    </a>
                                </div>
                            </div>
                        </section>`;
            document.querySelector('#albums').innerHTML += template;
        }
    }
};
const playAudio = (ev) => {
    if (ev.currentTarget.getAttribute('data-preview-track') == 'null'){
        console.log('there is no preview url available');
    } else{
        document.querySelector('footer > .track-item').innerHTML = ev.currentTarget.innerHTML;
        audioPlayer.setAudioFile(ev.currentTarget.getAttribute('data-preview-track'));
        audioPlayer.play();
        document.querySelector('footer').classList.add('footerplay')
    }
};
const displayTracksOfArtist = (ev) => {
    const at = ev.currentTarget.getAttribute('id');
    url = 'https://www.apitutor.org/spotify/v1/artists/' + at + '/top-tracks?country=us'
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        if (data.tracks[0] == null){
            document.querySelector("#tracks").innerHTML = "no tracks found";
        } else{
            document.querySelector("#tracks").innerHTML = ""
            const lentracks = data.tracks.length;
            for (let i = 0; i < Math.min(5,lentracks); i++){
                if(data.tracks[i].preview_url == null){
                    console.log("no preview available")
                    template = `<section class="track-item preview" >
                                    <img src="${data.tracks[i].album.images[2].url}">
                                    <div class="label">
                                        <h3>${data.tracks[i].name}</h3>
                                        <p>
                                            ${data.tracks[i].artists[0].name}
                                        </p>
                                    </div>
                                </section>`;
                }else{
                    template = `<section class="track-item preview" data-preview-track="${data.tracks[i].preview_url}" onclick="playAudio(event)">
                                    <img src="${data.tracks[i].album.images[2].url}">
                                    <i class="fas play-track fa-play" aria-hidden="true"></i>
                                    <div class="label">
                                        <h3>${data.tracks[i].name}</h3>
                                        <p>
                                            ${data.tracks[i].artists[0].name}
                                        </p>
                                    </div>
                                </section>`;
                }
                document.querySelector('#tracks').innerHTML += template;
            }
        }
       
    });
}
const displayTracksOfAlbum = (ev) => {
    const at = ev.currentTarget.getAttribute('id')
    url = 'https://www.apitutor.org/spotify/v1/albums/'+ at + '/tracks'
    let im = ev.currentTarget.getElementsByTagName('img')[0].getAttribute('src')
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        if (data.items[0] == null){
            document.querySelector("#tracks").innerHTML = "no tracks found";
        } else{
            document.querySelector("#tracks").innerHTML = ""
            const lentracks = data.items.length;
            for (let i = 0; i < Math.min(5,lentracks); i++){
                if(data.items[i].preview_url == null){
                    template = `<section class="track-item preview">
                                    <img src="${im}">
                                    <div class="label">
                                        <h3>${data.items[i].name}</h3>
                                        <p>
                                            ${data.items[i].artists[0].name}
                                        </p>
                                    </div>
                                </section>`;
                } else{
                    template = `<section class="track-item preview" data-preview-track="${data.items[i].preview_url}" onclick="playAudio(event)">
                                    <img src="${im}">
                                    <i class="fas play-track fa-play" aria-hidden="true"></i>
                                    <div class="label">
                                        <h3>${data.items[i].name}</h3>
                                        <p>
                                            ${data.items[i].artists[0].name}
                                        </p>
                                    </div>
                                </section>`;
                }
                document.querySelector('#tracks').innerHTML += template;
                }
            }
    });  
}