#!/usr/bin/env bun

import 'lib/global'
import { init_desktop, touch, data, config, cache } from 'lib/file'

init_desktop('launch', true)

log(data(), config(), cache())
