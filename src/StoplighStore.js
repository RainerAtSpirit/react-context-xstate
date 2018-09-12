import { Machine } from 'xstate';
import { types } from 'mobx-state-tree'

export const StoplightStore = types.model(
  'StoplightStore',
  {
    machineDefinition: types.frozen(),
    currentState: types.string
  }
)
  .volatile(self => ({
    machine: Machine(self.machineDefinition)
  }))
  .actions(self => {
    function transition(event) {
      const nextState = self.machine.transition(self.currentState, event.type).value;
      self.currentState = nextState;
    }

    return {
      transition
    }
  })

