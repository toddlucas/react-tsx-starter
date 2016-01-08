
export interface ISampleState {
    counter: number;
}

export default function sampleReducer(state: ISampleState = {
    counter: 0
}, action): ISampleState {
    return state;
}
