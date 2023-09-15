import state from './state.js'
import * as timer from './timer.js'
import * as el from "./elements.js"
import * as sounds from './sounds.js'

const sound = sounds.Floresta

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()

    toggleMusic()
    //sounds.Chuva.play()
    //sounds.Lareira.play()
    //sounds.Cafeteria.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
      sound.play()
      return
    }

    sound.pause()
}