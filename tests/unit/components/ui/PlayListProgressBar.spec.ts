/* eslint-disable */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import { PlayListProgressBar } from '@/components/ui'

describe("PlayListProgressBar.vue", () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(PlayListProgressBar, {
      propsData: {
        playListLength: 10,
        watchedItems: 5
      }
    })
  })

  it("displays a bar indicating a user's progress.", () => {
    const watchedItems = wrapper.find('.play-progress-watched').text()
    const playListLength = wrapper.find('.play-progress-list').text()

    expect(watchedItems).to.equal('5')
    expect(playListLength).to.equal('10')
  })
})
