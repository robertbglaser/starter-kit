'use strict'

import { create, Flex } from 'smbls'

import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'

create({
  extend: Flex,

  props: {
    theme: 'document',
    flow: 'column',
    height: '100vh',
    align: 'center space-between',
    border:'3 green',
  },

  Header: {},

  content: {},

  grid:{},

  Footer: { text: 'Footer' }
}, {
  designSystem,
  components,
  pages
})
