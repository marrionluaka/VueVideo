import VueCompositionAPI, { defineComponent } from '@vue/composition-api'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(VueCompositionAPI)
localVue.config.silent = true

export default function(cb: () => any) {
  return shallowMount(
    defineComponent({
      setup() {
        return cb()
      }
    }),
    { localVue }
  )
}

export function waitForInitialization(cb: () => any, timeout: number = 100): void {
  setTimeout(() => {
    cb()
  }, timeout)
}
