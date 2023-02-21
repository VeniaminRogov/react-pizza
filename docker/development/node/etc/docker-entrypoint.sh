#!/bin/sh
set -e

# until cgi-fcgi -bind -connect app:9000 > /dev/null 2>&1; do
#   >&2 echo "Waiting php..."
#   sleep 2
# done

yarn install && yarn dev