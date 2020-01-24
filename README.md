# airpipe

> Create a stdin/stdout pipe easily over wifi or internet.

The magic part is that the program will find the other person over the local
network or even the internet automatically, without needing to exchange IP
addresses. Just a direct pipe to another peer.

## Usage

In one terminal:
```sh
$ airpipe testshare
```

In another terminal:
```sh
$ echo "hello from another terminal" | airpipe testshare
```

## Fun Things You Can Do

### stream music that others can listen to

```
$ airpipe free-music < song.mp3
```

### share your live terminal

In the terminal to share:
```
$ script -f /tmp/log
```

and in another terminal:
```
$ tail -F /tmp/log | airpipe my-terminal
```

### live text chat

This is actually what `airpipe` does by default!

```
$ airpipe hello-ken
hey, how goes?
good thanks making some vegan pizza
ooo rad
```

### live audio chat

```
$ arecord -f cd | airpipe chat | aplay -f cd
```

you could also use lower quality audio for slower connections:

```
$ arecord -r 8000 -f U8 | airpipe chat | aplay -r 8000 -f U8
```

### stream live video of your screen

(This example is Linux-only!)

In one terminal:
```
$ ffmpeg -f alsa -ac 2 -f x11grab -r 25 -i :0.0 -vcodec mpeg2video -ar 44100 -s wvga -y /tmp/video.mpg
```

In another:
```
$ airpipe screen < /tmp/video.mpg
```

## Credits

This code forked from @cblgh's [paperslip](https://github.com/cblgh/paperslip)!

## License

ISC
