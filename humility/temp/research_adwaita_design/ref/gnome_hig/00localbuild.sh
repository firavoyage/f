#!/usr/bin/env bash

rm -rf ./build && sphinx-build -j auto -b html ./source ./build
