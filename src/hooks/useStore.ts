import { StoreOptions } from "vuex"
import { provide, inject } from '@vue/composition-api'

export interface IState {
  tileIndex: number
  playList: Map<number, any>
  autoPlay: boolean
  currentPlayingVideo: any
}

const StoreSymbol = Symbol()

export const provideStore = (store: StoreOptions<any>) => provide(StoreSymbol, store)

export const useStore = () => inject(StoreSymbol)

export const useMapState = (state: IState) => ({
  playList: () => state.playList,
  tileIndex: () => state.tileIndex,
  autoPlay: () => state.autoPlay,
  currentPlayingVideo: () => state.currentPlayingVideo
})

export const useMapGetters = (getters: any) => ({
  playList: () => getters.playList
})
