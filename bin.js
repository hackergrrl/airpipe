#!/usr/bin/env node
var minimist = require('minimist')
// var namegiver = require('human-readable-ids').hri
var dedent = require('dedent')
var paperslip = require('./index.js')

var help = dedent`
    Usage: airpipe <topic>
    Examples:
      # TODO
      echo hello | airpipe test123
`
var args = minimist(process.argv.slice(2))

var dup = paperslip.connect(args._[0])

process.stdin.pipe(dup).pipe(process.stdout)

