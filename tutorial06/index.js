const tracks = [
    {
      "id":"58zsLZPvfflaiIbNWoA22O",
      "name":"Human",
      "preview_url":"https://p.scdn.co/mp3-preview/a91dd957036e180f75338712c7298ceeafff1c93?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27390a788beadaad34ff684d3ec"
    },
    {
      "id":"7GgWAITsYJaRM3r50rfh5w",
      "name":"When We Were Young",
      "preview_url":"https://p.scdn.co/mp3-preview/1328651bb04eb8d872e784cd07ecabf2bf89d291?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273e4c2f81f26b3357015d65b82"
    },
    {
      "id":"49MMefftWPcltNP4OOJGSs",
      "name":"I Lost a Friend",
      "preview_url":"https://p.scdn.co/mp3-preview/dcf6b1340484ec595848fd85e7d70321d359dc7f?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273bab3095cab659556941c2fc7"
    },
    {
      "id":"76flsS3UnNr7UQIz6JmVT3",
      "name":"アイノカタチ",
      "preview_url":"https://p.scdn.co/mp3-preview/5599c4332f3141737d822758aadcefe4cfeb8b7c?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273dd6f81cb2ff38b3c62ea2e74"
    },
    {
      "id":"20d27F17AZOxTJOEHAVK2Y",
      "name":"Conversations in the Dark - John Legend vs. David Guetta",
      "preview_url":"https://p.scdn.co/mp3-preview/1ffd34967d63fb9fb438d048087658cc659d355b?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2731e20ec413fd7b32b3dc15a5b"
    },
    {
      "id":"60cYr5uuMoxvyuIx45rGEW",
      "name":"Boy In The Bubble",
      "preview_url":"https://p.scdn.co/mp3-preview/72c7b61fd712fe8c495bea436075430826d4bfc8?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273459d675aa0b6f3b211357370"
    },
    {
      "id": "4K1imZQQ0yKtJ40vGmUajS",
      "name": "Girl from the North Country",
      "preview_url": "https://p.scdn.co/mp3-preview/ef6d7428a8d62408825df6bf65f8ee4c8619af91?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27322debe1325cc21c9bb0c0b07"
    },
    {
      "id": "3y4Uza6K58JXQ7RYya8ZI5",
      "name": "Shelter from the Storm",
      "preview_url": "https://p.scdn.co/mp3-preview/6601fd00ff0932b7339e24def875754c26447aef?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba"
    },
    {
      "id": "4uYwlMp841PLJmj1gJJwIq",
      "name": "Lay, Lady, Lay",
      "preview_url": "https://p.scdn.co/mp3-preview/5dcc3e298d65fb8ea7bcfb782d0055e7c3af613d?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27322debe1325cc21c9bb0c0b07"
    },
    {
      "id": "3RkQ3UwOyPqpIiIvGVewuU",
      "name": "Mr. Tambourine Man",
      "preview_url": "https://p.scdn.co/mp3-preview/f4270fc48011ef0864a7c32a889d641579dba929?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2736960c5f4eb72f0c06aa92181"
    },
    {
      "id": "7xRemq7GLu0Tbqe9OckG87",
      "name": "The Man in Me",
      "preview_url": "https://p.scdn.co/mp3-preview/76995cc0437ba19a0fd830d16e1724f67c99f6b1?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273be634898c4b925ad6611ac64"
    },
    {
      "id": "0dRQDSgpobhDk7IuOBy8GJ",
      "name": "Bob Dylan",
      "preview_url": "https://p.scdn.co/mp3-preview/4c51f8cfa07dd62182e272dab9aa4e0125a14ddf?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2732dfa7761d4918777330d9794"
    },
    {
      "id": "6k9DUKMJpWvu6eFG3O64Lg",
      "name": "Subterranean Homesick Blues",
      "preview_url": "https://p.scdn.co/mp3-preview/35f11ac91a313d32a6fbffb9564035d8fd9a9299?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2736960c5f4eb72f0c06aa92181"
    },
    {
      "id": "7ny2ATvjtKszCpLpfsGnVQ",
      "name": "A Hard Rain's A-Gonna Fall",
      "preview_url": "https://p.scdn.co/mp3-preview/a1a6d38ef506f754baef60effe6920bb04d6783e?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573"
    }
];


// Part 1: 
// This code adds a card for the 6th track in the list (above)
// How would you use a loop so that a card is generated for every 
// track in the list?
for (let i = 0; i < tracks.length; i++) {
  const track = tracks[i];
  const template = `
      <div data-index="${i}" onclick="playSong(event);">
          <img src="${track.image_url}" />
          <h2>${track.name}</h2>
      </div>`;
  document.querySelector('main').innerHTML += template;
}
// Part 2: 
// Using the event object, detect the element that triggered the
// click event (currentTarget) to figure out which song to load 
// into the player next. When you've figured it out, set the 
// #audio-source element's "src" attribute with the correct 
// sound sample and then invoke the audio.load() and audio.play() 
// logic.
const playSong = (ev) => {
  var index = Number(ev.currentTarget.dataset.index);
  document.getElementById("audio-source").src = tracks[index].preview_url;
  const audio = document.querySelector('audio');
  audio.load();
  audio.play();
}
