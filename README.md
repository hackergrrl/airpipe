# spacecat

> Create a stdin/stdout pipe easily over wifi or internet.

The magic part is that the program will find the other person over the local
network or even the internet automatically, without needing to exchange IP
addresses. Just a direct pipe to another peer.

## Usage

In one terminal:
```sh
spacecat testshare
```

In another terminal:
```sh
echo "hello from another terminal" | spacecat testshare
```

## Credits

This code forked from @cblgh's [paperslip](https://github.com/cblgh/paperslip)!

## License

ISC
