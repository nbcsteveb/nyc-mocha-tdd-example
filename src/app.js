// import './app.css'
import {$on, $newEvent, $fireEvent} from './helpers'

$newEvent('toggleGraphBtnClicked', function (data) {
  // ...
})

export function onLoad () {
  const toggleGraphButton = document.querySelector('.toggle-graph')
  $on(
    toggleGraphButton,
    'click',
    () => {
      $fireEvent('toggleGraphBtnClicked')
      return true
    }
  )
}
