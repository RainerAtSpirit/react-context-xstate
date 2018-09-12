import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react'
import Stoplight from './Stoplight';
import { StoplightStore } from './StoplighStore'

const machineDefinition = {
  initial: 'red',
  states: {
    green: { on: { TIMER: 'yellow' } },
    yellow: { on: { TIMER: 'red' } },
    red: { on: { TIMER: 'green' } },
  },
}

let store = window.store = StoplightStore.create({
  machineDefinition,
  currentState: machineDefinition.initial
})

const App = observer(({ store, ...props }) => (
  <div className="flex justify-center items-center flex-column pa6">
    <div className="mb5">
      <Stoplight store={store} />
    </div>
    <button
      className="bg-transparent bw0 fw7 f3 pointer"
      onClick={() => store.transition({ type: 'TIMER' })}
    >
      Next Light &rarr;
      </button>
  </div>
))

App.displayName = 'App'

ReactDOM.render(<App store={store} />, document.getElementById('root'));
