var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

//Third Album Example
var albumRedHotChiliPeppers = {
    title: 'By The Way',
    artist: 'Red Hot Chili Peppers',
    label: 'Warner Bros. Records',
    year: '1999',
    albumArtUrl: 'assets/images/album_covers/Rhcp9.jpg',
    songs: [
        { title: 'By the Way?', duration: '3:37' },
        { title: 'Universally Speaking', duration: '4:19' },
        { title: 'This is the Place', duration: '4:17'},
        { title: 'Dosed', duration: '5:12' },
        { title: "Don't Forget Me", duration: '4:37'},
        { title: 'The Zephyr Song', duration: '3:52'},
        { title: "Can't Stop", duration: '4:29'},
        { title: 'I Could Die for You', duration: '3:13' },
        { title: 'Midnight', duration: '4:55' },
        { title: 'Throw Away Your Television', duration: '3:44'},
        { title: 'Cabron', duration: '3:38' },
        { title: "Tear", duration: '5:17'},
        { title: 'On Mercury', duration: '3:28'},
        { title: "Minor Thing", duration: '3:37'},
        { title: 'Warm Tape', duration: '4:16' },
        { title: 'Venice Queen', duration: '6:07' },
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
    // #2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    // #3
    albumSongList.innerHTML = '';

    // #4
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);

    var albumArray = [albumPicasso, albumMarconi, albumRedHotChiliPeppers];
    var index = 0;

    albumImage.addEventListener("click", function(event)  {
      setCurrentAlbum(albumArray[index]);
      index++;
      if ( index == albumArray.length ) {
        index = 0;
      }
    });
};
