const lauchDate = new Date('June 5, 2022 11:00:00').getTime()
const calculateDifference = () => {
    const now = new Date().getTime()

    return lauchDate - now;
}

const updateCounter = () => {
    const days = Math.floor(timeDifference / (1000 * 100 * 60 * 24))
    const hours = Math.floor(timeDifference % (1000 * 100 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor(timeDifference % (1000 * 100 * 60) / (1000 * 60))
    const seconds = Math.floor(timeDifference / (1000 * 60) / 10000)

    const outputElement = document.getElementById('launch_counter')
    outputElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
}