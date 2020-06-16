function AssignRedsr(state, action) {

    switch (action) {
        case "Inc":
            return state + 1
        case "Dec":
            return state - 1
        default:
                return 0
    }
}

export default AssignRedsr;