# airpipe

> Create a stdin/stdout pipe easily over wifi or internet.

The magic part is that the program will find the other person over the local
network or even the internet automatically, without needing to exchange IP
addresses, based on a topic string. Just a direct pipe to another peer.

## Usage

In one terminal:
```sh
$ airpipe testshare
```

In another terminal:
```sh
$ echo "hello from another terminal" | airpipe testshare
```

In this example, `testshare` is the topic string that each peer uses to find the other. Anybody else online using the same topic string will also connect though, so choose something unlikely to collide with other users' use.

You can generate a random topic string (on POSIX systems like Linux, BSD, MacOS) with
```
$ xxd -ps -g 0 -l 12 /dev/urandom
166c3e056808ed18b5d8515a
```

## Fun Things You Can Do

### share files

on one side:
```
$ airpipe topic < file.tar.gz
```

and on the other:
```
$ airpipe topic > file.tar.gz
```

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

and then on the remote side just type
```
airpipe
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

- this code forked from @cblgh's [paperslip](https://github.com/cblgh/paperslip)!
- networking code provided by [hyperswarm](https://github.com/hyperswarm)

## License

ISC
