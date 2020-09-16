#!/bin/bash
source "$HOME"/.bash_profile || true >/dev/null 2>&1

set -e
FRONTDIR=$(pwd)

cd "$FRONTDIR"

function usage() {
  echo -e "Usage: $0 [-n] [-t] [-b] [-h]
      -n: install nvm
      -t: Unit test
      -b: Build mode
      -h: show usage" 1>&2;
  exit 0;
}

pushd . > /dev/null
OPTIND=1         # Reset in case getopts has been used previously in the shell.

buildMode=prod
installNVM=0
unitTest=0
while getopts "nb:th" o; do
  case "${o}" in
    n)
      installNVM=1
      ;;
    t)
      unitTest=1
      ;;
    b)
      buildMode=$OPTARG
      ;;
    h | *)
      usage
      ;;
  esac
done
shift $((OPTIND-1))
[ "$1" = "--" ] && shift
if [[ "$@" != "" ]]; then
    echo "Unrecognized parameters: $@"
fi

if [[ $installNVM -ne 0 ]]; then
  cd "$FRONTDIR"
  echo "===Install nvm==="
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
fi

echo "===Use node version==="
node -v
export NODE_ENV=dev

if [[ $unitTest -ne 0 ]]; then
  cd "$FRONTDIR"

  echo "===Install node dependencies==="
  npm install

  echo "===Linting==="
  npm run lint

  echo "===Unit Testing==="
  npm run unit
fi

# Build as version
echo "===Build Frontend==="
cd "$FRONTDIR" && BUILD_MODE=${buildMode} npm run build
